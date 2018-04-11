(function () {
  'use strict';

  angular
    .module('app')
    .controller('organizationNewCtrl', organizationNewCtrl);

  organizationNewCtrl.$inject = ['$state', '$filter', '$scope', 'logger', 'organizationFactory' , '$rootScope', '$window' ];
  /* @ngInject */
  function organizationNewCtrl($state, $filter, $scope, logger, organizationFactory , $rootScope, $window ) {

    var self = this;

    self.plans = ["Basic", "Advance", "Intermediate"];

    self.quotas = {
      "Basic": 50000,
      "Advance": 60000,
      "Intermediate": 700000
    };

    self.organization = {};
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
        self.organization.quota = self.quotas[plan];
    }

    self.search = function(mobile) {
        self.organization.contact = "demo";
        self.organization.email = "demo@demo.com";
    }

    self.onSubmit = function(form) {
      if(form.$invalid) {
        logger.error("Invalid details");
      } else {
        logger.success("organization submitted successfully");
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
            self.organization.start = e.date;
        });
          
    }

    self.initDatepicker2 = function() {     
        $('#expiry').datepicker({
            rtl: App.isRTL(),
            orientation: "left",
            autoclose: true
        }).on('changeDate', function(e) {
            self.organization.expiry = e.date;
        });
          
    }
 
  

  
   
  
  }

})();