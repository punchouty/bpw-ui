(function () {
  'use strict';

  angular
    .module('util.auth')
    .factory('userService', userService);

  userService.$inject = ['$localStorage', '$rootScope'];

  /* @ngInject */
  function userService($localStorage, $rootScope) {    
   
   return {
      setUser: function(user) {
        $rootScope.currentUser = user;
        $rootScope.$broadcast("user-updated"); 
      },

      getUser: function() {
        return $rootScope.currentUser;
      },

      getUserRoles: function() {
        return $rootScope.currentUser? $rootScope.currentUser.roles: null;
      },

      removeUser: function() {
        $rootScope.currentUser = null;        
        $rootScope.$broadcast("user-removed"); 
      }

   }

    
   
  }

})();

