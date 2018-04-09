(function () {
  'use strict';

  angular
    .module('util.auth')
    .factory('principal', principal);

  principal.$inject = ['$q', '$http', '$timeout', 'logger', '$localStorage', '$rootScope', '__env', 'userService', '$sessionStorage'];

  /* @ngInject */
  function principal($q, $http, $timeout, logger, $localStorage, $rootScope, __env, userService, $sessionStorage) {
     var _identity = undefined;
     var _authenticated = false;

    var service = {
      authenticate: authenticate,
      identity: identity,
      isAuthenticated: isAuthenticated,

      isIdentityResolved: isIdentityResolved,
      isInAnyRole: isInAnyRole,
      isInRole: isInRole,

      signin: signin,
      signout: signout
    };
    return service;
    
    function isIdentityResolved() {
    	return angular.isDefined(_identity);
    }

    function isAuthenticated() {
    	return _authenticated;
    }
    
    function isInRole(role) {
        if (!_authenticated || !_identity.roles) return false;
        return _identity.roles.indexOf(role) != -1;
    }
    
    function isInAnyRole(roles) {
        if (!_authenticated || !_identity.roles) return false;
        for (var i = 0; i < roles.length; i++) {
          if (this.isInRole(roles[i])) return true;
        }
        return false;
    }
    
    function authenticate(identity) {
        _identity = identity;
        _authenticated = identity != null;
    }
    
    function identity(force) {
    	console.dir(_identity);
    	var deferred = $q.defer();
        if (force === true) _identity = undefined;
        // check and see if we have retrieved the identity data from the server.
		// if we have, reuse it by immediately resolving
        if (angular.isDefined(_identity)) {
          deferred.resolve(_identity);
          return deferred.promise;
        }
       else {
       	deferred.reject(_identity);
       	return deferred.promise;
       }
    	// $http.get('/user', { ignoreErrors: true })
     //    	.success(function(response) {
     //    		console.log("refresh");
    	// 		console.dir(response)
    	// 		_identity = response.principal.user;
     //            _authenticated = true;
     //            userService.setUser(response.principal.user);
     //            deferred.resolve(_identity);
     //        })
     //        .error(function () {
     //            _identity = null;
     //            _authenticated = false;
     //            deferred.resolve(_identity);
     //        });
     //    return deferred.promise;
    }
    
    function signin(username, password) {
    	var deferred = $q.defer();
    	var headers = {
			authorization : "Basic "
					+ btoa(username + ":"
							+ password)
		} 
		$http.get('/user', {
			headers : headers
		}).then(function(response) {
			console.log("Login");
			console.dir(response)
			_identity = response.data.principal.user;
            _authenticated = true;
            userService.setUser(response.data.principal.user);
            deferred.resolve(_identity);
		}, function(response) {
			_identity = null;
            _authenticated = false;
            deferred.reject(_identity);
            logger.error("Login Failed");
		});
		return deferred.promise;
    }
    
    function signout() {
    	var deferred = $q.defer();
    	$http.post('logout', {}).finally(function() {        
    		deferred.resolve(_identity);
    		    _identity = null;
            _authenticated = false;
            $sessionStorage.$reset();
            
            userService.removeUser();
		});
    	return deferred.promise;
    }
  }

})();


