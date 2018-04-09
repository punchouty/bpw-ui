(function() {
	'use strict';

	angular.module('app.profile').controller('ProfileController',
			ProfileController);

	ProfileController.$inject = [ 'logger', '$stateParams',			
			'$rootScope', '$state', 'profileFactory',
			'validationFactory', '$scope', 'principal', '$window' ];
	/* @ngInject */
	function ProfileController(logger, $stateParams, $rootScope, $state,
			profileFactory, validationFactory,
			$scope, principal, $window) {

		var vm = this;
		
		activate();


		function activate() {
			console.log('In Activate')

			

		}

		
	}
})();