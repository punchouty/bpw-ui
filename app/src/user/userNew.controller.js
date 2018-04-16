(function () {
  'use strict';

  angular
    .module('app')
    .controller('userNewCtrl', userNewCtrl);

  userNewCtrl.$inject = ['$state', '$filter', '$scope', 'logger', 'userFactory' , '$rootScope', '$window' ];
  /* @ngInject */
  function userNewCtrl($state, $filter, $scope, logger, userFactory , $rootScope, $window ) {

    var self = this;

    self.roles = ["Project Admin", "Volunteer"];
   

    self.user = {};
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
        self.user.quota = self.quotas[plan];
    }

    self.search = function(mobile) {
        self.user.contact = "demo";
        self.user.email = "demo@demo.com";
    }

    self.onSubmit = function(form) {
      console.log(self.user);
      if(form.$invalid) {
        logger.error("Invalid details");
      } else {
        logger.success("user submitted successfully");
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
            self.user.start = e.date;
        });
          
    }

    self.initDatepicker2 = function() {     
        $('#expiry').datepicker({
            rtl: App.isRTL(),
            orientation: "left",
            autoclose: true
        }).on('changeDate', function(e) {
            self.user.expiry = e.date;
        });
          
    }
 
  

  
   
  
  }

})();