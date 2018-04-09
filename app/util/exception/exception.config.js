(function() {
	'use strict';

	angular.module('util.exception').config(exceptionConfig);

	exceptionConfig.$inject = [ 'exceptionHandlerProvider' ];
	/* @ngInject */
	function exceptionConfig(exceptionHandlerProvider) {
		exceptionHandlerProvider.configure('[Edis Error] ');
	}
})();