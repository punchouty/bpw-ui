(function () {
  'use strict';

  angular
    .module('app')
    .controller('workFlowEmailCtrl', workFlowEmailCtrl);

  workFlowEmailCtrl.$inject = ['$state','$stateParams', '$filter', '$scope', 'logger', 'userFactory' , '$rootScope', '$window' ];
  /* @ngInject */
  function workFlowEmailCtrl($state, $stateParams, $filter, $scope, logger, userFactory , $rootScope, $window ) {
  	var self = this;
	self.id = $stateParams.id;



  	}

})();