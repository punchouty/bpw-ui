(function () {
  'use strict';

  angular
    .module('app')
    .controller('projectViewCtrl', projectViewCtrl);

  projectViewCtrl.$inject = ['$state', '$stateParams', '$scope', '$http', 'logger', 'NgTableParams', '$filter' , 'projectFactory', '$uibModal' , '$rootScope', '$window'];
  /* @ngInject */
  function projectViewCtrl($state, $stateParams, $scope, $http, logger, NgTableParams, $filter , projectFactory, $uibModal , $rootScope, $window ) {

    var self = this;

    self.totalCount = 100;
    self.plans = [{id: "Basic", title:"Basic"},{id: "Advance", title:"Advance"},{id: "Intermediate",title: "Intermediate"}];
    self.projectId = $stateParams.id;
    self.tab = $stateParams.tab;
    self.showEdit = false;

    activate();

    function activate() {
      self.master=[];

      $scope.selected = self.tab? self.tab : '1';
      
      projectFactory.getProjectById(self.projectId)
          .then(function(response) {  
              self.project = response.data;
               self.master = response.data.subProjects;                 
               console.log(self.master);
              // pagination();  
          },function() {
              logger.error("Something went wrong")       
          });

      projectFactory.getUsers()
          .then(function(response) {  
               self.users = response.data;                 
               console.log(self.users);                
          },function() {
              logger.error("Something went wrong")       
          });
      
    }

     self.getUsers = function(phrase) {
          console.log(phrase, self.users)

         var returnData = _.filter(self.users, function(o) { 
                    return o.name.includes(phrase); 
                 });

         console.log(returnData);
         return self.users;
          // self.users;
        }
  
  self.saveDetails = function(form) {
      if(form.$invalid) {
        logger.error("All fields required");
      }else {
        logger.success("Information Saved");
      }
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
  
    self.goBack = function() {
      // $window.history.go(-2);
      $window.history.back();
    }

    self.getUsers = function(phrase) {
          console.log(phrase, self.users)

         var returnData = _.filter(self.users, function(o) { 
                    return o.name.includes(phrase); 
                 });

         console.log(returnData);
         return self.users;
          // self.users;
        }

     self.addProofReader =  function(row) {
        self.selectedSubProject = row;
         var modalInstance = $uibModal.open({
            animation : self.animationsEnabled,           
            templateUrl : 'app/src/project/partials/reader.html',
            controller : ModalInstanceCtrl,
            windowClass: 'z-dialog',
            controllerAs : '$ctrl'
          });      
    }

    self.assignReader=  function(row, reader) {
      logger.success("reader assigned successfully");
    }

     ModalInstanceCtrl.$inject = [ '$uibModalInstance' ];

      function ModalInstanceCtrl($uibModalInstance) {
        var $ctrl = this;
        $ctrl.subProject = self.selectedSubProject;
        $ctrl.users = self.users;
       
        $ctrl.ok = function(form, action) {   
          if (action == "AssignReader") {
            self.assignReader($ctrl.subProject,$ctrl.proofReader);
            
            //$uibModalInstance.close();
          }         
          $uibModalInstance.close();         
        };

        $ctrl.cancel = function() {
          $uibModalInstance.dismiss('cancel');
        }; 

        $ctrl.getUsers = self.getUsers;
       
      }
  
   
  
  }

})();