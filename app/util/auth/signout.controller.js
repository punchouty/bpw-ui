(function() {
  'use strict';

  angular
    .module('util.auth')
    .controller('SignoutController', SignoutController);

  SignoutController.$inject = ['$state', 'principal', 'logger', '$window', '$location'];
  /* @ngInject */
  function SignoutController($state, principal, logger, $window, $location) {
    var vm = this;

    activate();

    function activate() {
      principal.signout().then(function() {
          //logger.info("User log out successfully");
          $state.go('auth.signin').then(function() {
            // $window.location.reload();
          });
          
      });
    }
  }
})();