(function () {
  'use strict';

  angular
    .module('app')
    .controller('workflowProjectsListCtrl', workflowProjectsListCtrl);

  workflowProjectsListCtrl.$inject = ['$state', '$stateParams', '$scope', '$http', 'logger', 'NgTableParams', '$filter' , 'projectFactory' , '$rootScope' ];
  /* @ngInject */
  function workflowProjectsListCtrl($state, $stateParams, $scope, $http, logger, NgTableParams, $filter , projectFactory , $rootScope ) {

    var self = this;

    self.totalCount = 100;
    self.plans = [{id: "Basic", title:"Basic"},{id: "Advance", title:"Advance"},{id: "Intermediate",title: "Intermediate"}];


    activate();

    function activate() {
      self.master=[]
      
      projectFactory.getProjects()
          .then(function(response) {  
               self.master = response.data;                 
               console.log(self.master);
               // pagination();  
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