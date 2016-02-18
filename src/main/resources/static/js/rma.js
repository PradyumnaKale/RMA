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
});