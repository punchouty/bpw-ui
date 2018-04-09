(function() {
  'use strict';

  angular.module('util.logger', ['toastr']);
  
  angular.module('util.logger').constant('toastr', toastr);
  
})();
