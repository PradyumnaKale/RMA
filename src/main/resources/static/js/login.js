angular.module('rmaApp').factory("AuthService", function ($q, $http, $rootScope, $state) {
    var service = {};
    service.authenticate = function (userName, password) {
    	var headers = {
    			Authorization: 'Basic ' + btoa(userName + ':' + password),
    			'X-Requested-With' : 'XMLHttpRequest'
    	};
        $http.post('/authenticate', {}, {headers: headers}).then(function (response) {
            $http.defaults.headers.common['Authorization'] = 'Basic ' + btoa(userName + ':' + password);
            $rootScope.$broadcast('userAuthenticated');
            $rootScope.isLoggedIn = true;
            $rootScope.userId = response.data.name;
            $rootScope.authorities = response.data.authorities;
            if(response.data.authorities = 'ROLE_TEACHER')
            	$state.go('welcome');
            else if(response.data.authorities = 'ROLE_STUDENT')
            	$state.go('studentReport');
        });
    }
    service.logout = function (){
        delete $http.defaults.headers.common['Authorization'];
        $rootScope.$broadcast('userLoggedOut');
        $rootScope.isLoggedIn = false;
        delete $rootScope.userId;
        delete $rootScope.authorities;
        $state.go('login');
    }
    return service;
});