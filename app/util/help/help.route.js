(function() {
	'use strict';

	angular.module('util.help').run(appRun);

	appRun.$inject = [ 'routerHelper' ];

	function appRun(routerHelper) {
		routerHelper.configureStates(getStates());
	}

	function getStates() {
		return [ {
			state : 'app.scratchpad',
			config : {
				url : '/scratchpad',
		           
	            data: {pageTitle: 'Web service Help', pageSubTitle: 'Postman Simulator'},
				templateUrl : "app/util/help/scratchpad.html",
				controller : 'ScratchpadController',
				controllerAs : 'vm'
			}
		} ];
	}
})();
