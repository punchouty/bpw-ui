(function() {
	'use strict';
	angular.module('app').factory('approvalFactory',
			approvalFactory);

	approvalFactory.$inject = ['$q', '$http', '__env']
	function approvalFactory($q, $http, __env) {
		var service = {};	

		service.getApprovals = function() {
			var promise = $http.get("data/approvals.json")
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