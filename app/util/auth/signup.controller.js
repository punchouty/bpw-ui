(function() {
  'use strict';

  angular
    .module('util.auth')
    .controller('SignupController', SignupController);

  SignupController.$inject = ['$scope', '$state', 'principal', 'organizationFactory', 'logger', '__env'];
  /* @ngInject */
  function SignupController($scope, $state, principal,organizationFactory, logger, __env) {
    var vm = this;

    vm.signup = signup;

    function signup() {
    	console.log(vm.mobile + " : " + vm.password + " : " + vm.rememberMe);
		  $state.go('app.dashboard');
    }

     vm.getOrganizations = function(phrase) {
        console.log(phrase);

      return organizationFactory.getOrganizations()
          .then(function(response) {  
               vm.organizations = response.data;    
               console.log(vm.organizations);             
               return vm.organizations;                
          },function() {
              logger.error("Something went wrong")       
          });

       
        // self.users;
      }

    activate();

    function activate() {


      //TODO to be removed;
      // vm.mobile = __env.user;
      // vm.password = __env.password;
      // vm.rememberMe = false;
      vm.validFromServer = true;
    }

    
  }
})();
