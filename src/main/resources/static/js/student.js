angular.module('studentApp', [])
.controller('StudentListController', function($http, $log) {
	var studentlist = this;
	studentlist.students = [];

	studentlist.addStudent= function() {
		var now = new Date();
		var student = {
			firstName : studentlist.firstName,
			lastName : studentlist.lastName,
			birthdate : studentlist.birthdate.getDate() + '-' + studentlist.birthdate.getMonth() + '-' + studentlist.birthdate.getFullYear(),
			marks : studentlist.marks
		};
		$http.post('/student', student).success(function (student) {
			studentlist.firstName = '';
			studentlist.lastName = '';
			studentlist.birthdate = now.getDate() + '-' + now.getMonth() + '-' + now.getFullYear();
			studentlist.marks = '';
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