(function() {
	'use strict';
	angular.module('app').factory('resellerFactory',
			resellerFactory);

	resellerFactory.$inject = ['$q', '$http', '__env']
	function resellerFactory($q, $http, __env) {
		var service = {};	

		service.getResellers = function() {
			var promise = $http.get("data/resellers.json")
					.then(function(data) {
						return data;
					}, function(errors) {
						return errors;
					});
			return promise;
		};

		service.getResellerById = function(id) {
			var promise = $http.get("data/demo.json")
					.then(function(data) {
						return data;
					}, function(errors) {
						return errors;
					});
			return promise;
		};

		service.getOrganizations = function() {
			var promise = $http.get("data/organizations.json")
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

		service.getLogs = function() {
			var promise = $http.get("data/logs.json")
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