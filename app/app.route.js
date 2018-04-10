(function() {
  'use strict';

  angular
    .module('app')
    .run(appRun);

  appRun.$inject = ['routerHelper'];
  
  function appRun(routerHelper) {
    routerHelper.configureStates(getStates());
  }

  function getStates() {
    return [      
      {
            state: 'app.resellers',
            config:  { 
               url: "/resellers",
               templateUrl: "app/src/reseller/list.html",            
               data: {pageTitle: 'Resellers'},
               controller: "resellersListCtrl",
               controllerAs: 'vm'               
            }
        },
        {
            state: 'app.new-reseller',
            config:  { 
               url: "/resellers/new",
               templateUrl: "app/src/reseller/new.html",            
               data: {pageTitle: 'Add Reseller'},
               controller: "resellerNewCtrl",
               controllerAs: 'vm'               
            }
        },
         {
            state: 'app.resellerView',
            config:  { 
               url: "/resellers/:id/view",
               templateUrl: "app/src/reseller/view.html",            
               data: {pageTitle: 'Reseller View'},
               controller: "resellerViewCtrl",
               controllerAs: 'vm'               
            }
        },
        {
            state: 'app.organizations',
            config:  { 
               url: "/organizations",
               templateUrl: "views/blank.html",            
               data: {pageTitle: 'Organizations'},
               controller: "BlankController",
               resolve: {
                   deps: ['$ocLazyLoad', function($ocLazyLoad) {
                       return $ocLazyLoad.load({
                           name: 'MetronicApp',
                           insertBefore: '#ng_load_plugins_before', // load the above css files before a LINK element with this ID. Dynamic CSS files must be loaded between core and theme css files
                           files: [
                               'js/controllers/BlankController.js'
                           ] 
                       });
                   }]
               }
            }
        },
        {
            state: 'app.users',
            config:  { 
               url: "/users",
               templateUrl: "views/blank.html",            
               data: {pageTitle: 'Users'},
               controller: "BlankController",
               resolve: {
                   deps: ['$ocLazyLoad', function($ocLazyLoad) {
                       return $ocLazyLoad.load({
                           name: 'MetronicApp',
                           insertBefore: '#ng_load_plugins_before', // load the above css files before a LINK element with this ID. Dynamic CSS files must be loaded between core and theme css files
                           files: [
                               'js/controllers/BlankController.js'
                           ] 
                       });
                   }]
               }
            }
        },
        {
            state: 'app.roles',
            config:  { 
               url: "/roles",
               templateUrl: "views/blank.html",            
               data: {pageTitle: 'Roles'},
               controller: "BlankController",
               resolve: {
                   deps: ['$ocLazyLoad', function($ocLazyLoad) {
                       return $ocLazyLoad.load({
                           name: 'MetronicApp',
                           insertBefore: '#ng_load_plugins_before', // load the above css files before a LINK element with this ID. Dynamic CSS files must be loaded between core and theme css files
                           files: [
                               'js/controllers/BlankController.js'
                           ] 
                       });
                   }]
               }
            }
        },
        {
            state: 'app.plans',
            config:  { 
               url: "/plans",
               templateUrl: "views/blank.html",            
               data: {pageTitle: 'Plans'},
               controller: "BlankController",
               resolve: {
                   deps: ['$ocLazyLoad', function($ocLazyLoad) {
                       return $ocLazyLoad.load({
                           name: 'MetronicApp',
                           insertBefore: '#ng_load_plugins_before', // load the above css files before a LINK element with this ID. Dynamic CSS files must be loaded between core and theme css files
                           files: [
                               'js/controllers/BlankController.js'
                           ] 
                       });
                   }]
               }
            }
        }

    ];
  }
})();
