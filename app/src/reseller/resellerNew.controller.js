(function () {
  'use strict';

  angular
    .module('app')
    .controller('resellerNewCtrl', resellerNewCtrl);

  resellerNewCtrl.$inject = ['$state', '$filter', '$scope', 'logger', 'resellerFactory' , '$rootScope', '$window' ];
  /* @ngInject */
  function resellerNewCtrl($state, $filter, $scope, logger, resellerFactory , $rootScope, $window ) {

    var self = this;

    self.plans = ["Basic", "Advance", "Intermediate"];

    self.quotas = {
      "Basic": 50000,
      "Advance": 60000,
      "Intermediate": 700000
    };

    self.reseller = {};
    activate();

    function activate() {
      
      var d = new Date();
      var year = d.getFullYear();
      var month = d.getMonth();
      var day = d.getDate();
      var nextYear = new Date(year + 1, month, day);

      self.start =  $filter('date')(new Date(),"dd-MM-yyyy");    
      self.expiry =  $filter('date')(nextYear,"dd-MM-yyyy");
      
      
    }

    self.changePlan = function(plan) {
        self.reseller.quota = self.quotas[plan];
    }

    self.search = function(mobile) {
        self.reseller.contact = "demo";
        self.reseller.email = "demo@demo.com";
    }

    self.onSubmit = function(form) {
      if(form.$invalid) {
        logger.error("Invalid details");
      } else {
        logger.success("Reseller submitted successfully");
      }

    }
  

    self.goBack = function() {
      // $window.history.go(-2);
      $window.history.back();
    }

    self.initDatepicker = function() {     
        $('#start').datepicker({
            rtl: App.isRTL(),
            orientation: "left",
            autoclose: true
        }).on('changeDate', function(e) {
            self.reseller.start = e.date;
        });
          
    }

    self.initDatepicker2 = function() {     
        $('#expiry').datepicker({
            rtl: App.isRTL(),
            orientation: "left",
            autoclose: true
        }).on('changeDate', function(e) {
            self.reseller.expiry = e.date;
        });
          
    }
 
  

  
   
  
  }

})();