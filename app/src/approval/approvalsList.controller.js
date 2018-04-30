(function () {
  'use strict';

  angular
    .module('app')
    .controller('approvalsListCtrl', approvalsListCtrl);

  approvalsListCtrl.$inject = ['$state', '$stateParams', '$scope', '$http', 'logger', 'NgTableParams', '$filter' , 'approvalFactory' , '$rootScope' ];
  /* @ngInject */
  function approvalsListCtrl($state, $stateParams, $scope, $http, logger, NgTableParams, $filter , approvalFactory , $rootScope ) {

    var self = this;

    $scope.query = {
      status: ""
    };

    self.totalCount = 100;
    self.statuses = [{id:"", name: "Select Status"},{id: "New", name: "New"},{id: "Approved", name: "Approved"}, {id: "Rejected", name: "Rejected"}];


    activate();

    function activate() {
      self.master=[]
      
      approvalFactory.getApprovals()
          .then(function(response) {  
               self.master = response.data;                 
               console.log(self.master);
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
            if(self.master!=null){ 
                var filteredData = null;
                var orderedData = null;

                if (params != null) {
                if (params.filter()) {
                    filteredData = $filter('filter')(self.master, params.filter())
                  }
                  else {
                    filteredData = self.master.content;
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
                  return self.master.content;
                  
                }
              
             }
             
          },
          
      });
    }

    self.deleteOrder = function() {

      swal({
          title: 'Confirmation',
          text: 'Do You Want To Delete',
          type: 'info',
          allowOutsideClick: 'true',
          showConfirmButton: 'true',
          showCancelButton: 'true',
          confirmButtonClass: 'color-view bg-green-jungle bg-font-green-jungle',
          cancelButtonClass: 'cancel btn btn-lg btn-danger',
          // closeOnConfirm: sa_closeOnConfirm,
          // closeOnCancel: sa_closeOnCancel,
          // confirmButtonText: sa_confirmButtonText,
          // cancelButtonText: sa_cancelButtonText,
        },
        function(isConfirm){
              if (isConfirm){         
                
              }
              else {
            
              }
        });
    }

    self.newProject = function() {
      $state.go('app.newProject');
    }
  
    self.projectView = function(row) {
      $state.go('app.projectView',{id: row.id});
    }
  
   
  
  }

})();