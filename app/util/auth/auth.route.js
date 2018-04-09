(function() {
  'use strict';

  angular
    .module('util.auth')
    .run(appRun);

  appRun.$inject = ['routerHelper'];
  
  function appRun(routerHelper) {
    routerHelper.configureStates(getStates());
  }

  function getStates() {
    return [
      {
        state: 'auth',
        config: {
          abstract: true,
          url: '/auth',
          template: '<div ui-view></div>'
        }
      },
      {
        state: 'auth.signin',
        config: {
          url: '/signin',
          fullPage : true,
          templateUrl: "app/util/auth/login.html",
          controller: 'SigninController',
          data : {
            pageTitle : 'Sign in',
            //  pageSubTitle : 'User List'
          },
          controllerAs: 'vm'
        }
      },
      {
        state: 'auth.signout',
        config: {
          controller: 'SignoutController',
          data : {
            pageTitle : 'Signout',
            //  pageSubTitle : 'User List'
          },
          controllerAs: 'vm'
        }
      },
      {
        state: 'auth.forgot',
        config: {
          url: '/forgot',
          fullPage : true,
          templateUrl: "app/util/auth/forgot_password.html",
          controller: 'ForgotPasswordCtrl',
          data : {
            pageTitle : 'Forgot Password',
            //  pageSubTitle : 'User List'
          },
          controllerAs: 'vm'
        }
      }
//      ,
//      {
//        state: 'auth.registration',
//        config: {
//          url: '/registration',
//          templateUrl: "app/blocks/auth/login_registration.html"
//        }
//      },
//      {
//        state: 'auth.reset',
//        config: {
//          url: '/reset',
//          templateUrl: "app/blocks/auth/reset_password.html",
//          controller: 'ResetController',
//          controllerAs: 'vm'
//        }
//      },
//      {
//        state: 'auth.lockscreen',
//        config: {
//          url: '/lock',
//          templateUrl: "app/blocks/auth/login_lock_screen.html"
//        }
//      }
    ];
  }
})();
