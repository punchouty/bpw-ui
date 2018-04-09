(function() {
  'use strict';

  angular
    .module('util.help')
    .controller('ScratchpadController', ScratchpadController);

  ScratchpadController.$inject = ['$http', 'logger'];
  /* @ngInject */
  function ScratchpadController($http, logger) {
    var vm = this;

    vm.execute = execute;

    function execute() {
    	var data = {};
    	if(vm.input) data = JSON.parse(vm.input);
      if(vm.method === "get") {
    	  $http.get(vm.url, data)
    	  .success(function(response) {
    		  logger.success("Execution successfull");
    		  vm.output = JSON.stringify(response, null, 2);
    	  })
    	  .error(function(response) {
    		  vm.output = JSON.stringify(response, null, 2);
    		  logger.error("Execution failed");
    	  });
      }
      else if(vm.method === "post") {
    	  $http.post(vm.url, data)
    	  .success(function(response) {
    		  logger.success("Execution successfull");
    		  vm.output = JSON.stringify(response, null, 2);
    	  })
    	  .error(function(response) {
    		  vm.output = JSON.stringify(response, null, 2);
    		  logger.error("Execution failed");
    	  });
      }
      else if(vm.method === "put") {
    	  $http.put(vm.url, data)
    	  .success(function(response) {
    		  logger.success("Execution successfull");
    		  vm.output = JSON.stringify(response, null, 2);
    	  })
    	  .error(function(response) {
    		  vm.output = JSON.stringify(response, null, 2);
    		  logger.error("Execution failed");
    	  });
      }
      else if(vm.method === "patch") {
    	  $http.patch(vm.url, data)
    	  .success(function(response) {
    		  logger.success("Execution successfull");
    		  vm.output = JSON.stringify(response, null, 2);
    	  })
    	  .error(function(response) {
    		  vm.output = JSON.stringify(response, null, 2);
    		  logger.error("Execution failed");
    	  });
      }
      else {
    	  logger.error("Method not supported failed");
      }
    }

    activate();

    function activate() {
      vm.url = "/user";
      vm.input = "{}"
	  vm.output = "{}";
      vm.method = "get";
    }
  }
})();
