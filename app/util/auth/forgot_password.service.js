(function() {
	'use strict';
	angular.module('util.auth').factory('forgotPasswordFactory', forgotPasswordFactory);

	forgotPasswordFactory.$inject = [ '$http', '__env' ]
	function forgotPasswordFactory($http, __env) {
		var service = {};

		service.forgotPassword = function(phoneNo) {
			var promise = $http.post(__env.dataApi + "/users/forgotPassword?phoneNo="+phoneNo )
					.then(function(data) {
						return data;
					}, function(errors) {
						return errors;
					});
			return promise;
		};
		
//		service.create = function(client) {
//			var promise = $http.post(__env.refDataUrl + "/clients", client)
//					.then(function(data) {
//						return data;
//					}, function(errors) {
//						return errors;
//					});
//			return promise;
//		};
//
//		service.get = function(id) {
//			var promise = $http.get(__env.refDataUrl + "/clients/" + id).then(
//					function(response) {
//						return response;
//					}, function(response) {
//						return response;
//					});
//			return promise;
//		};
//
//		service.update = function(id, client) {
//			var promise = $http
//					.put(__env.refDataUrl + "/clients/" + id, client).then(
//							function(response) {
//								return response;
//							}, function(response) {
//								return response;
//							});
//			return promise;
//		};
//
//		service.changeStatus = function(id) {
//
//			var promise = $http.put(
//					__env.refDataUrl + "/clients/" + id + "/toggleStatus")
//					.then(function(response) {
//						return response;
//					}, function(response) {
//						return response;
//					});
//			return promise;
//		};
//		service.getRegionsForClient = function(id) {
//
//			var promise = $http.get(
//					__env.refDataUrl + "/clients/" + id + "/regions").then(
//					function(data) {
//						return data;
//					}, function(errors) {
//						return errors;
//					});
//			return promise;
//		};

		return service;
	}
	;
})();
