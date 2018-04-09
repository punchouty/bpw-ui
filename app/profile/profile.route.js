(function() {
  'use strict';

  angular
    .module('app.profile')
    .run(appRun);

  appRun.$inject = ['routerHelper'];
  
  function appRun(routerHelper) {
    routerHelper.configureStates(getStates());
  }

  function getStates() {
    return [
      {
        state: 'app.me',
        config: {
          url: '/me',
          data: {
             pageTitle : 'New User Profile',
             pageSubTitle : 'Account'
          },
          templateUrl: "app/profile/profile.html",
          controller: 'ProfileController',
          controllerAs: 'vm'
        }
      },
      {
        state: 'app.changePassword',
        config: {
        	url: '/changePassword',
            templateUrl: "app/profile/changePassord.html",
            controller: 'ChangePasswordController',
            controllerAs: 'vm'
        }
      }
    ];
  }
})();
