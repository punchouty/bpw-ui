(function() {
  'use strict';
  angular
    .module('util.help')
   .factory('validationFactory',validationFactory);

  validationFactory.$inject=['logger']
  function validationFactory (logger) {
    var service = {};

    service.validate = function(form) {
        var firstError = null;
        var field = null, firstError = null;
        for (field in form) {
            if (field[0] != '$') {
                if (firstError === null && !form[field].$valid) {
                    firstError = form[field].$name;
                }

                if (form[field].$pristine) {
                    form[field].$dirty = true;
                }
            }
        }
        angular.element('.ng-invalid[name=' + firstError + ']').focus();
        logger.error('Validation Error', 'error');
    }

    return service;
  };
})();
