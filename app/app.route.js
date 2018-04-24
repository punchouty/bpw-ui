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
            state: 'app.organizations',
            config:  { 
               url: "/organizations",
               templateUrl: "app/src/organization/list.html",            
               data: {pageTitle: 'Organizations'},
               controller: "organizationsListCtrl",
               controllerAs: 'vm'               
            }
        },
        {
            state: 'app.newOrganization',
            config:  { 
               url: "/organizations/new",
               templateUrl: "app/src/organization/new.html",            
               data: {pageTitle: 'Add Organization'},
               controller: "organizationNewCtrl",
               controllerAs: 'vm'               
            }
        },
         {
            state: 'app.organizationView',
            config:  { 
               url: "/organizations/:id/view",
               templateUrl: "app/src/organization/view.html",            
               data: {pageTitle: 'Organization View'},
               controller: "organizationViewCtrl",
               controllerAs: 'vm'               
            }
        },
        {
            state: 'app.projects',
            config:  { 
               url: "/projects",
               templateUrl: "app/src/project/list.html",            
               data: {pageTitle: 'Projects'},
               controller: "projectsListCtrl",
               controllerAs: 'vm'               
            }
        },
        {
            state: 'app.newProject',
            config:  { 
               url: "/projects/new",
               templateUrl: "app/src/project/new.html",            
               data: {pageTitle: 'New Project'},
               controller: "projectCtrl",
               controllerAs: 'vm'               
            }
        },
         {
            state: 'app.newQuickProject',
            config:  { 
               url: "/projects/quicknew",
               templateUrl: "app/src/project/quickNew.html",            
               data: {pageTitle: 'New Project'},
               controller: "quickNewProjectCtrl",
               controllerAs: 'vm'               
            }
        },
         {
            state: 'app.projectView',
            config:  { 
               url: "/projects/:id/view",
               templateUrl: "app/src/project/view.html",            
               data: {pageTitle: 'Project Details'},
               controller: "projectViewCtrl",
               controllerAs: 'vm'               
            }
        },
        {
            state: 'app.subProjectView',
            config:  { 
               url: "/projects/sub/:id/view",
               templateUrl: "app/src/project/subView.html",            
               data: {pageTitle: 'Project'},
               controller: "subProjectViewCtrl",
               controllerAs: 'vm'               
            }
        },
         {
            state: 'app.users',
            config:  { 
               url: "/users",
               templateUrl: "app/src/user/list.html",            
               data: {pageTitle: 'Users'},
               controller: "usersListCtrl",
               controllerAs: 'vm'               
            }
        },
        {
            state: 'app.newUser',
            config:  { 
               url: "/users/new",
               templateUrl: "app/src/user/new.html",            
               data: {pageTitle: 'Add User'},
               controller: "userNewCtrl",
               controllerAs: 'vm'               
            }
        },
         {
            state: 'app.userView',
            config:  { 
               url: "/users/:id/view",
               templateUrl: "app/src/user/view.html",            
               data: {pageTitle: 'User View'},
               controller: "userViewCtrl",
               controllerAs: 'vm'               
            }
        },
        {
            state: 'app.roles',
            config:  { 
               url: "/roles",
               templateUrl: "app/src/role/list.html",            
               data: {pageTitle: 'Roles'},
               controller: "roleCtrl",
               controllerAs: 'vm'               
            }
        },
        {
            state: 'app.approvals',
            config:  { 
               url: "/approvals",
               templateUrl: "app/src/approval/list.html",            
               data: {pageTitle: 'Approvals'},
               controller: "approvalsListCtrl",
               controllerAs: 'vm'               
            }
        },

    ];
  }
})();
