(function () {
  'use strict';
  angular
    .module('util.auth')
    .controller('ForgotPasswordCtrl', ForgotPasswordCtrl);

  ForgotPasswordCtrl.$inject = ['forgotPasswordFactory', '$state', 'logger','validationFactory']
  function ForgotPasswordCtrl(forgotPasswordFactory, $state, logger,validationFactory) {

    var vm = this;
    vm.forgotForm = {};

    vm.forgotPassword = function(phoneNo) {
    	$state.go('auth.signin');
    }
    

//    self.toggleStatus = function (id) {
//      clientFactory.changeStatus(id).then(function (response) {
//        if (response.status == 200) {
//          logger.info('Status Changed Successfully');
//        }
//        else if (response.status == -1) {
//          logger.error('Network Error');
//        }
//        else if (response.status == 404) {
//          logger.error('Client not found');
//        }
//        else {
//          logger.error('Backend error');
//        }
//        $state.reload();
//      });
//    };


  };
})();