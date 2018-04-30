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
        state: 'app.profile',
        config: {
          url: '/profile',
          data: {
             pageTitle : 'User Profile',
             pageSubTitle : 'Account'
          },
          abstract: 'true',
          templateUrl: "app/profile/profileTemp.html",
          // controller: 'ProfileController',
          // controllerAs: 'vm'
        }
      },
      
      {
        state: 'app.profile.me',
        config: {
          url: '/me',
          data: {
             pageTitle : 'User Profile',
             // pageSubTitle : 'Account'
          },
          templateUrl: "app/profile/profile.html",
          controller: 'ProfileController',
          controllerAs: 'vm'
        }
      },

      {
        state: 'app.profile.organization',
        config: {
          url: '/organization',
          data: {
             pageTitle : 'Organization',
             pageSubTitle : 'Account'
          },
          templateUrl: "app/profile/organization/list.html",
          controller: 'prfOrganizationsListCtrl',
          controllerAs: 'vm'
        }
      },

      // {
      //   state: 'app.profile.history',
      //   config: {
      //     url: '/history',
      //     data: {
      //        pageTitle : 'History',
      //        pageSubTitle : 'Account'
      //     },
      //     templateUrl: "app/profile/history/list.html",
      //     controller: 'prfProjectsListCtrl',
      //     controllerAs: 'vm'
      //   }
      // },
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
