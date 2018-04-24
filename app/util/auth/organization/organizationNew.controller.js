(function () {
  'use strict';

  angular
    .module('util.auth')
    .controller('organizationAuthNewCtrl', organizationAuthNewCtrl);

  organizationAuthNewCtrl.$inject = ['$state', '$filter', '$scope', 'logger', 'organizationAuthFactory' , '$rootScope', '$window' ];
  /* @ngInject */
  function organizationAuthNewCtrl($state, $filter, $scope, logger, organizationAuthFactory , $rootScope, $window ) {

    var self = this;

    self.plans = ["Basic", "Advance", "Intermediate"];

    self.quotas = [
          '50000',
          '100000',
          '150000'
    ];

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

    self.search = function(mobile) {
        self.organization.contact = "demo";
        self.organization.email = "demo@demo.com";
    }

    self.onSubmit = function(form) {
      if(form.$invalid) {
        logger.error("Invalid details");
      } else {
        logger.success("organization submitted successfully");
        $state.go("auth.signin");
      }

    }
  

    self.goBack = function() {
      // $window.history.go(-2);
      $window.history.back();
    }

    // self.initDatepicker = function() {     
    //     $('#start').datepicker({
    //     }).on('changeDate', function(e) {
    //         self.organization.start = e.date;
    //     });
          
    // }

    // self.initDatepicker2 = function() {     
    //     $('#expiry').datepicker({
    //     }).on('changeDate', function(e) {
    //         self.organization.expiry = e.date;
    //     });
          
    // }
 
  

  
   
  
  }

})();