(function() {
	'use strict';
	angular.module('app').factory('projectFactory',
			projectFactory);

	projectFactory.$inject = ['$q', '$http', '__env']
	function projectFactory($q, $http, __env) {
		var service = {};	

		service.getProjects = function() {
			var promise = $http.get("data/projects.json")
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

		service.getReaders = function() {
			var promise = $http.get("data/readers.json")
					.then(function(data) {
						return data;
					}, function(errors) {
						return errors;
					});
			return promise;
		};

		service.getProjectById = function(projectId) {
			var promise = $http.get("data/project.json")
					.then(function(data) {
						return data;
					}, function(errors) {
						return errors;
					});
			return promise;
		};

		service.getSubProjectById = function(subProjectId) {
			var promise = $http.get("data/sub_project.json")
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