(function() {
	'use strict';
	angular.module('app.profile')
	.filter( 'camelCase', function ()
         {
             var camelCaseFilter = function ( input )
             {
                 var words = input.split( ' ' );
                 for ( var i = 0, len = words.length; i < len; i++ )
                     words[i] = words[i].charAt( 0 ).toUpperCase() + words[i].slice( 1 );
                 return words.join( '_' );
             };
             return camelCaseFilter;
         } )
	.factory('profileFactory', profileFactory);

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

		service.getProjects = function() {
			var promise = $http.get("data/projects.json")
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


		return service;
	}
	;
})();
