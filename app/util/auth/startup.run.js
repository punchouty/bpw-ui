startup.run.js
(function() {
  'use strict';

  angular.module('util.auth').run(startup);
  
  startup.$inject = ['$state', 'principal'];
  
  function startup($state, principal) {
//	  if(principal.isAuthenticated()) {
//		  console.log("R...principal.isAuthenticated()... " + true);
//		  $state.go("app.dashboard")
//	  }
//	  else {
//		  console.log("R...principal.isAuthenticated()... " + false);
//		  $state.go('auth.signin');
//	  }
  }
})();