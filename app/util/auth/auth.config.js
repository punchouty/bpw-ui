(function() {
	'use strict';

	angular.module('util.auth').config(authConfig);

	authConfig.$inject = [ '$httpProvider' ];
	/* @ngInject */
	function authConfig($httpProvider) {
		$httpProvider.defaults.headers.common["X-Requested-With"] = 'XMLHttpRequest';
	}
})();