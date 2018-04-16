(function() {
	'use strict';
	angular.module('app').factory('roleFactory',
			roleFactory);

	roleFactory.$inject = ['$q', '$http', '__env']
	function roleFactory($q, $http, __env) {
		var service = {};	

	

		service.getRoleById = function(id) {
			var promise = $http.get("data/role.json")
					.then(function(data) {
						return data;
					}, function(errors) {
						return errors;
					});
			return promise;
		};

	

		service.getRoles = function() {
			var promise = $http.get("data/roles.json")
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