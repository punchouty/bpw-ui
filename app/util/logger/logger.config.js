(function() {
  'use strict';
  
  angular.module('util.logger').config(toastrConfig);
  
  toastrConfig.$inject = ['toastr'];
  /* @ngInject */
  function toastrConfig(toastr) {
    toastr.options.timeOut = 2000;
    toastr.options.closeButton = true;
    toastr.options.positionClass = 'toast-bottom-right';
  }
})();