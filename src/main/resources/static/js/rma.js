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
        // STUDENTREPORT STATE ========================================
        .state('studentReport', {
            url: '/studentReport',
            templateUrl: 'partials/studentReport.html'
        })
})
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
			middleName : studentlist.middleName,
			lastName : studentlist.lastName,
			birthdate : studentlist.birthdate.getDate() + '-' + (studentlist.birthdate.getMonth() + 1) + '-' + studentlist.birthdate.getFullYear(),
			yearOfAdmission : studentlist.yearOfAdmission,
		};
		$http.post('/student', student).success(function (student) {
			studentlist.rollNo = '';
			studentlist.firstName = '';
			studentlist.middleName = '';
			studentlist.lastName = '';
			studentlist.birthdate = birthDateDefault;
			studentlist.yearOfAdmission = now.getFullYear();
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
});