(function() {
  'use strict';

    angular.module('util.error')
    .config(function ($httpProvider) {
        $httpProvider.interceptors.push('responseObserver');
      })
    .factory('responseObserver', function responseObserver($q, $location) {
        return {
            'responseError': function(errorResponse) {
                switch (errorResponse.status) {
                case 401:
                    console.log("Error 401");
                    $location.path('/auth/signin');;
                    break;                        
                case 403:
                    console.log("Error 403");
                    $location.path('/error/403');;
                    break;
                case 404:
                    console.log("Error 404");
                    $location.path('/error/404');;
                    break;    
                case 500:
                    console.log("Error 500");
                    $location.path('/error/500');;
                    break;
                }
                return $q.reject(errorResponse);
            }
        };
    });
})();