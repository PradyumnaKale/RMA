angular.module('rmaApp', ['ui.router'])
.config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/welcome');

    $stateProvider

    	// WELCOME STATE ========================================
    	.state('welcome', {
    		url: '/welcome',
        	templateUrl: 'partials/welcome.html'
    	})
    	
        // LOGIN STATE ========================================
        .state('login', {
            url: '/login',
            templateUrl: 'partials/login.html'
        })

    	// STUDENT STATE ========================================
        .state('students', {
            url: '/students',
            templateUrl: 'partials/students.html'
        })
        
        // SUBJECT STATE ========================================
        .state('subjects', {
        	url: '/subjects',
        	templateUrl: 'partials/subjects.html'
        	
        })
        
        // EXAM STATE ========================================
        .state('exams', {
        	url: '/exams',
        	templateUrl: 'partials/exams.html'
        })
        //======================================================================
        // studentMarks STATE ========================================
        .state('studentMarks', {
        	url: '/studentMarks',
        	templateUrl: 'partials/studentMarks.html'
        })
        // STUDENTMARKS SEMESTER I STATE ========================================
        .state('studentMarks.semesterIMarks', {
        	url: '/semesterIMarks',
        	templateUrl: 'partials/semesterIMarks.html'
        })
        // STUDENTMARKS SEMESTER II STATE ========================================
        .state('studentMarks.semesterIIMarks', {
        	url: '/semesterIIMarks',
        	templateUrl: 'partials/semesterIIMarks.html'
        })
        // STUDENTMARKS SEMESTER III STATE =======================================
        .state('studentMarks.semesterIIIMarks', {
        	url: '/semesterIIIMarks',
        	templateUrl: 'partials/semesterIIIMarks.html'
        })
        // STUDENTMARKS SEMESTER IV STATE ========================================
        .state('studentMarks.semesterIVMarks', {
        	url: '/semesterIVMarks',
        	templateUrl: 'partials/semesterIVMarks.html'
        })
        
        //========================================================================
        // STUDENTREPORT STATE ========================================
        .state('studentReport', {
            url: '/studentReport',
            templateUrl: 'partials/studentReport.html'
        })
        // STUDENTREPORT SEMESTER I STATE ========================================
        .state('studentReport.semesterI', {
        	url: '/semesterI',
        	templateUrl: 'partials/semesterI.html'
        })
        // STUDENTREPORT SEMESTER II STATE ========================================
        .state('studentReport.semesterII', {
        	url: '/semesterII',
        	templateUrl: 'partials/semesterII.html'
        })
        // STUDENTREPORT SEMESTER III STATE ========================================
        .state('studentReport.semesterIII', {
        	url: '/semesterIII',
        	templateUrl: 'partials/semesterIII.html'
        })
        // STUDENTREPORT SEMESTER IV STATE ========================================
        .state('studentReport.semesterIV', {
        	url: '/semesterIV',
        	templateUrl: 'partials/semesterIV.html'
        })
})
.run(function($rootScope, AuthService){
	$rootScope.logout = function(){
		AuthService.logout();
	}
})
//Students Controller

.controller('StudentListController', function($http, $log) {
	var now = new Date();
	var birthDateDefault = new Date(now.getYear() - 18,0,1);
	var studentlist = this;
	studentlist.birthdate = birthDateDefault;
	studentlist.yearOfAdmission = now.getFullYear();
	studentlist.students = [];
	studentlist.addStudent= function() {
		var student = {
			rollNo : studentlist.rollNo,
			firstName : studentlist.firstName,
			lastName : studentlist.lastName,
			fathersName : studentlist.fathersName,
			mothersName : studentlist.mothersName,
			birthdate : studentlist.birthdate.getFullYear() + '-' + (studentlist.birthdate.getMonth() + 1) + '-' + studentlist.birthdate.getDate(),
			yearOfAdmission : studentlist.yearOfAdmission,
		};
		$http.post('/student', student).success(function (studentData) {
			studentlist.rollNo = '';
			studentlist.firstName = '';
			studentlist.lastName = '';
			studentlist.fathersName = '';
			studentlist.mothersName = '';
			studentlist.birthdate = birthDateDefault;
			studentlist.yearOfAdmission = now.getFullYear();
			var users = {
					userId : student.rollNo,
					pass : student.firstName,
			};
			$http.post('/users', users).success(function (usersData) {
				var user_roles = {
						username : users.userId,
						//users_role : 'ROLE_STUDENT',
				};
				$http.post('/user_roles', user_roles).success(function (user_rolesData) {
					
				})
			})
			getStudents();
		})
		.error(function (error) {
			$log.error(error || 'Could not add student');
		});

	};

	studentlist.deleteStudent = function(i) {
		$http['delete'](studentlist.students[i]._links.self.href)
		.success(function (students) {
			getStudents();
		})
		.error(function (error) {
			$log.error(error || 'Could not delete student ' + i);
		})
		studentlist.students.splice(i, 1);
	};

	function getStudents() {
		$http.get('/student')
			.success(function (students) {
				studentlist.students = students._embedded.student;
			})
			.error(function (error) {
				$log.error(error || 'Could not get students');
			});
	}
	
	
	getStudents();
})

//Subjects Controller

.controller('SubjectListController', function($http, $log) {
	var subjectlist = this;
	subjectlist.subjects = [];
	subjectlist.addSubject= function() {
		var subject = {
			subjectId : subjectlist.subjectId,
			subjectType : subjectlist.subjectType,
			semester : subjectlist.semester,
			year : subjectlist.year,
			subjectName : subjectlist.subjectName,
			description : subjectlist.description,
		};
		$http.post('/subject', subject).success(function (subject) {
			subjectlist.subjectId = '';
			subjectlist.subjectType = '';
			subjectlist.semester = '';
			subjectlist.year = '';
			subjectlist.subjectName = '';
			subjectlist.description = '';
			getSubjects();
		})
		.error(function (error) {
			$log.error(error || 'Could not add subject');
		});

	};
/*
	subjectlist.deleteSubject = function(i) {
		$http['delete'](subjectlist.subjects[i]._links.self.href)
		.success(function (subjects) {
			getSubjects();
		})
		.error(function (error) {
			$log.error(error || 'Could not delete subject ' + i);
		})
		subjectlist.subjects.splice(i, 1);
	};
*/
	function getSubjects() {
		$http.get('/subject?size=100')
			.success(function (subjects) {
				subjectlist.subjects = subjects._embedded.subject;
			})
			.error(function (error) {
				$log.error(error || 'Could not get subject');
			});
	}
	getSubjects();
})

//Exams Controller

.controller('ExamListController', function($http, $log) {
	var examlist = this;
	examlist.exams = [];
	examlist.addExam= function() {
		var exam = {
			examYear : examlist.examYear,
			semester : examlist.semester,
			examName : examlist.examName,
		};
		$http.post('/exam', exam).success(function (exam) {
			examlist.examYear = '';
			examlist.semester = '';
			examlist.examName = '';
			getExams();
		})
		.error(function (error) {
			$log.error(error || 'Could not add exam');
		});

	};

	examlist.deleteExam = function(i) {
		$http['delete'](examlist.exams[i]._links.self.href)
		.success(function (exams) {
			getExams();
		})
		.error(function (error) {
			$log.error(error || 'Could not delete exam ' + i);
		})
		examlist.exams.splice(i, 1);
	};

	function getExams() {
		$http.get('/exam?size=100')
			.success(function (exams) {
				examlist.exams = exams._embedded.exam;
			})
			.error(function (error) {
				$log.error(error || 'Could not get exam');
			});
	}
	getExams();
})

//Student Subject Marks Controller
.controller('SemesterIController', function($http, $log) {
	var semesterIMarksList = this;
	semesterIMarksList.subjectmarks = [];
	semesterIMarksList.addSubjectMarks = function(){
		var subjectmark = {
			student_id	: semesterIMarksList.student_id;
			semester	: semesterIMarksList.semester;
			exam_year	: semesterIMarksList.exam_year;
			sub_id		: semesterIMarksList.sub_id;
			sub_name	: semesterIMarksList.sub_name;
			internal	: semesterIMarksList.internal;
			external	: semesterIMarksList.external;
			total		: semesterIMarksList.total;
			sub_grade	: semesterIMarksList.sub_grade;
		};
		$http.post('/subjectmarks', subjectmarks).success(function (subjectmarks) {
			semesterIMarksList.student_id	= '';
			semesterIMarksList.semester		= '';
			semesterIMarksList.exam_year	= '';
			semesterIMarksList.sub_id		= '';
			semesterIMarksList.sub_name		= '';
			semesterIMarksList.internal		= '';
			semesterIMarksList.external		= '';
			semesterIMarksList.total		= '';
			semesterIMarksList.sub_grade	= '';
			getSubjectMarks();
		})
		.error(function (error) {
			$log.error(error || 'Could not add subjectmarks');
		});
	};
	function getSubjectMarks() {
		$http.get('/subjectmarks?size=100')
			.success(function (subjectmarks) {
				semesterIMarksList.subjectmarks = subjectmarks._embedded.subjectmark;
			})
			.error(function (error) {
				$log.error(error || 'Could not get subjectmarks');
			});
	}
	getSubjectMarks();
})

.controller('SemesterIIController', function($http, $log) {
	var semesterIIMarksList = this;
	semesterIIMarksList.subjectmarks = [];
	semesterIIMarksList.addSubjectMarks = function(){
		var subjectmark = {
			student_id	: semesterIIMarksList.student_id;
			semester	: semesterIIMarksList.semester;
			exam_year	: semesterIIMarksList.exam_year;
			sub_id		: semesterIIMarksList.sub_id;
			sub_name	: semesterIIMarksList.sub_name;
			internal	: semesterIIMarksList.internal;
			external	: semesterIIMarksList.external;
			total		: semesterIIMarksList.total;
			sub_grade	: semesterIIMarksList.sub_grade;
		};
		$http.post('/subjectmarks', subjectmarks).success(function (subjectmarks) {
			semesterIIMarksList.student_id	= '';
			semesterIIMarksList.semester	= '';
			semesterIIMarksList.exam_year	= '';
			semesterIIMarksList.sub_id		= '';
			semesterIIMarksList.sub_name	= '';
			semesterIIMarksList.internal	= '';
			semesterIIMarksList.external	= '';
			semesterIIMarksList.total		= '';
			semesterIIMarksList.sub_grade	= '';
			getSubjectMarks();
		})
		.error(function (error) {
			$log.error(error || 'Could not add subjectmarks');
		});
	};
	function getSubjectMarks() {
		$http.get('/subjectmarks?size=100')
			.success(function (subjectmarks) {
				semesterIIMarksList.subjectmarks = subjectmarks._embedded.subjectmark;
			})
			.error(function (error) {
				$log.error(error || 'Could not get subjectmarks');
			});
	}
	getSubjectMarks();
})

.controller('SemesterIIIController', function($http, $log) {
	var semesterIIIMarksList = this;
	semesterIIIMarksList.subjectmarks = [];
	semesterIIIMarksList.addSubjectMarks = function(){
		var subjectmark = {
			student_id	: semesterIIIMarksList.student_id;
			semester	: semesterIIIMarksList.semester;
			exam_year	: semesterIIIMarksList.exam_year;
			sub_id		: semesterIIIMarksList.sub_id;
			sub_name	: semesterIIIMarksList.sub_name;
			internal	: semesterIIIMarksList.internal;
			external	: semesterIIIMarksList.external;
			total		: semesterIIIMarksList.total;
			sub_grade	: semesterIIIMarksList.sub_grade;
		};
		$http.post('/subjectmarks', subjectmarks).success(function (subjectmarks) {
			semesterIIIMarksList.student_id	= '';
			semesterIIIMarksList.semester	= '';
			semesterIIIMarksList.exam_year	= '';
			semesterIIIMarksList.sub_id		= '';
			semesterIIIMarksList.sub_name	= '';
			semesterIIIMarksList.internal	= '';
			semesterIIIMarksList.external	= '';
			semesterIIIMarksList.total		= '';
			semesterIIIMarksList.sub_grade	= '';
			getSubjectMarks();
		})
		.error(function (error) {
			$log.error(error || 'Could not add subjectmarks');
		});
	};
	function getSubjectMarks() {
		$http.get('/subjectmarks?size=100')
			.success(function (subjectmarks) {
				semesterIIIMarksList.subjectmarks = subjectmarks._embedded.subjectmark;
			})
			.error(function (error) {
				$log.error(error || 'Could not get subjectmarks');
			});
	}
	getSubjectMarks();
})

.controller('SemesterIVController', function($http, $log) {
	var semesterIVMarksList = this;
	semesterIVMarksList.subjectmarks = [];
	semesterIVMarksList.addSubjectMarks = function(){
		var subjectmark = {
			student_id	: semesterIVMarksList.student_id;
			semester	: semesterIVMarksList.semester;
			exam_year	: semesterIVMarksList.exam_year;
			sub_id		: semesterIVMarksList.sub_id;
			sub_name	: semesterIVMarksList.sub_name;
			internal	: semesterIVMarksList.internal;
			external	: semesterIVMarksList.external;
			total		: semesterIVMarksList.total;
			sub_grade	: semesterIVMarksList.sub_grade;
		};
		$http.post('/subjectmarks', subjectmarks).success(function (subjectmarks) {
			semesterIVMarksList.student_id	= '';
			semesterIVMarksList.semester	= '';
			semesterIVMarksList.exam_year	= '';
			semesterIVMarksList.sub_id		= '';
			semesterIVMarksList.sub_name	= '';
			semesterIVMarksList.internal	= '';
			semesterIVMarksList.external	= '';
			semesterIVMarksList.total		= '';
			semesterIVMarksList.sub_grade	= '';
			getSubjectMarks();
		})
		.error(function (error) {
			$log.error(error || 'Could not add subjectmarks');
		});
	};
	function getSubjectMarks() {
		$http.get('/subjectmarks?size=100')
			.success(function (subjectmarks) {
				semesterIVMarksList.subjectmarks = subjectmarks._embedded.subjectmark;
			})
			.error(function (error) {
				$log.error(error || 'Could not get subjectmarks');
			});
	}
	getSubjectMarks();
})

//Login Controller
.controller('LoginCtrl', function($scope, $http, $log, AuthService) {
	var loginCtrl = this;
	loginCtrl.userId = "";
	loginCtrl.password = "";
	loginCtrl.login = function(){
		$log.info(loginCtrl.userId);
		$log.info(loginCtrl.password);
		AuthService.authenticate(loginCtrl.userId, loginCtrl.password);
	}
});