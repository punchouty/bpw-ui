(function() {
  'use strict';

  angular
    .module('util.auth')
    .controller('SigninController', SigninController);

  SigninController.$inject = ['$scope', '$state', 'principal', 'logger'];
  /* @ngInject */
  function SigninController($scope, $state, principal, logger) {
    var vm = this;

    vm.signin = signin;

    function signin() {
    	console.log(vm.mobile + " : " + vm.password + " : " + vm.rememberMe);
		  $state.go('app.resellers');
    }

    activate();

    function activate() {
      //TODO to be removed;
      vm.mobile = __env.user;
      vm.password = __env.password;
      vm.rememberMe = false;
      vm.validFromServer = true;
    }

    
  }
})();
