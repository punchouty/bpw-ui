(function() {
	'use strict';
	angular.module('app').factory('userFactory',
			userFactory);

	userFactory.$inject = ['$q', '$http', '__env']
	function userFactory($q, $http, __env) {
		var service = {};	

	

		service.getUserById = function(id) {
			var promise = $http.get("data/user.json")
					.then(function(data) {
						return data;
					}, function(errors) {
						return errors;
					});
			return promise;
		};

	

		service.getUsers = function() {
			var promise = $http.get("data/users.json")
					.then(function(data) {
						return data;
					}, function(errors) {
						return errors;
					});
			return promise;
		};

		

		
		return service;
	};
})();