(function () {
  'use strict';

  angular
    .module('app')
    .controller('organizationViewCtrl', organizationViewCtrl);

  organizationViewCtrl.$inject = ['$state', '$filter', '$scope', 'logger', 'organizationFactory' , '$rootScope', 'NgTableParams', '$stateParams', '$window' ];
  /* @ngInject */
  function organizationViewCtrl($state, $filter, $scope, logger, organizationFactory , $rootScope, NgTableParams, $stateParams, $window ) {

    var self = this;

    self.plans = ["Basic", "Advance", "Intermediate"];
    self.infoEditMode = false;
    self.planEditMode = false;

    self.organizationId = $stateParams.id;
    self.plans = [{id: "Basic", title:"Basic"},{id: "Advance", title:"Advance"},{id: "Intermediate",title: "Intermediate"}];


    self.quotas = {
      "Basic": 50000,
      "Advance": 60000,
      "Intermediate": 700000
    };

    self.organization = {};
    self.organizations = [];
    self.users = [];
    self.changeLogs = [];
    activate();

    function activate() {
      
      var d = new Date();
      var year = d.getFullYear();
      var month = d.getMonth();
      var day = d.getDate();
      var nextYear = new Date(year + 1, month, day);

      self.start =  $filter('date')(new Date(),"dd-MM-yyyy");    
      self.expiry =  $filter('date')(nextYear,"dd-MM-yyyy");

      organizationFactory.getOrganizationById(self.organizationId)
          .then(function(response) {  
               self.organization = response.data; 
               console.log(self.organization);                
               
          },function() {
              logger.error("Something went wrong")       
          });

      organizationFactory.getResellers()
          .then(function(response) {  
               self.resellers = response.data;                 
               console.log(self.resellers);
               pagination();  
          },function() {
              logger.error("Something went wrong")       
          });
      
      organizationFactory.getUsers()
          .then(function(response) {  
               self.users = response.data;                 
               console.log(self.users);
               pagination2();  
          },function() {
              logger.error("Something went wrong")       
          });

      organizationFactory.getLogs()
          .then(function(response) {  
               self.changeLogs = response.data;                 
               console.log(self.changeLogs);
               pagination3();  
          },function() {
              logger.error("Something went wrong")       
          });            
      
      
    }


    function pagination() {
      self.tableParams = new NgTableParams({
          page: 1,
          count: 100
      },{          
          //Returns the data for rendering
          getData : function(params){          
            if(self.resellers!=null){ 
                var filteredData = null;
                var orderedData = null;

                if (params != null) {
                if (params.filter()) {
                    filteredData = $filter('filter')(self.resellers, params.filter())
                  }
                  else {
                    filteredData = self.resellers.content;
                  }
                  if (params.sorting()) {
                    orderedData = $filter('orderBy')(filteredData, params.orderBy());
                  }
                  else {
                    orderedData = filteredData;
                  }

                  params.total(orderedData.length);
                  var returnData = orderedData.slice((params.page() - 1) * params.count(), params.page() * params.count())
                  return returnData;
                }
                else {
                  return self.resellers.content;
                  
                }
              
             }
             
          },
          
      });
    }


    function pagination2() {
      self.tableParams2 = new NgTableParams({
          page: 1,
          count: 100
      },{          
          //Returns the data for rendering
          getData : function(params){          
            if(self.users!=null){ 
                var filteredData = null;
                var orderedData = null;

                if (params != null) {
                if (params.filter()) {
                    filteredData = $filter('filter')(self.users, params.filter())
                  }
                  else {
                    filteredData = self.users.content;
                  }
                  if (params.sorting()) {
                    orderedData = $filter('orderBy')(filteredData, params.orderBy());
                  }
                  else {
                    orderedData = filteredData;
                  }

                  params.total(orderedData.length);
                  var returnData = orderedData.slice((params.page() - 1) * params.count(), params.page() * params.count())
                  return returnData;
                }
                else {
                  return self.users.content;
                  
                }
              
             }
             
          },
          
      });
    }

    function pagination3() {
      self.tableParams3 = new NgTableParams({
          page: 1,
          count: 100
      },{          
          //Returns the data for rendering
          getData : function(params){          
            if(self.changeLogs!=null){ 
                var filteredData = null;
                var orderedData = null;

                if (params != null) {
                if (params.filter()) {
                    filteredData = $filter('filter')(self.changeLogs, params.filter())
                  }
                  else {
                    filteredData = self.changeLogs.content;
                  }
                  if (params.sorting()) {
                    orderedData = $filter('orderBy')(filteredData, params.orderBy());
                  }
                  else {
                    orderedData = filteredData;
                  }

                  params.total(orderedData.length);
                  var returnData = orderedData.slice((params.page() - 1) * params.count(), params.page() * params.count())
                  return returnData;
                }
                else {
                  return self.changeLogs.content;
                  
                }
              
             }
             
          },
          
      });
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
        logger.success("Organization submitted successfully");
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