(function() {
	'use strict';
	angular.module('app.profile').factory('profileFactory', profileFactory);

	profileFactory.$inject = [ '$http', '__env' ]
	function profileFactory($http, __env) {
		var service = {};

		service.findById = function(id) {
			var promise = $http.get(__env.dataApi + "/users/" + id)
					.then(function(response) {
						console.log(response);
						return response;
					}, function(error) {
						console.log(error);
						return error;
					});
			return promise;
		};
		service.updatechangePassword = function(passwordData) {
			console.log(__env.dataApi);
			var promise = $http.post(__env.dataApi + "/users/changePassword",passwordData)
					.then(function(response) {
						console.log(response);
						return response;
					}, function(error) {
						console.log(error);
						return error;
					});
			return promise;
		};

		return service;
	}
	;
})();
