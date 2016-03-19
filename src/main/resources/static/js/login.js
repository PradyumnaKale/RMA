angular.module('app').factory("AuthService", function ($q, localStorageService, $http, $rootScope) {
    var service = {};
    service.authenticate = function (userName, password) {
        $http.post('/authenticate', {
            user: userName,
            password: password
        }).then(function (data) {
            localStorageService.add('authToken', data.token);
            $http.defaults.headers.common['Authorization'] = 'Basic ' + data.token;
            $rootScope.$broadcast('userAuthenticated');
        });
    }
    service.useTokenFromCache=function() {
        var token=localStorageService.get('authToken');
        if(token) 
        $http.defaults.headers.common['Authorization'] 
          = 'Basic ' + data.token;
    }    
return service;
});