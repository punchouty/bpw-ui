(function () {
  'use strict';

  angular
    .module('app')
    .controller('roleCtrl', roleCtrl);

  roleCtrl.$inject = ['$state', '$filter', '$scope', 'logger', 'roleFactory' , 'NgTableParams' ,'$uibModal' , '$rootScope', '$window' ];
  /* @ngInject */
  function roleCtrl($state, $filter, $scope, logger, roleFactory , NgTableParams ,$uibModal , $rootScope, $window ) {

    var self = this;    
   
    
    activate();

    function activate() {
      
       self.master=[]
      
      roleFactory.getRoles()
          .then(function(response) {  
               self.master = response.data;                 
               console.log(self.master);
               pagination();  
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

    self.onSubmit = function(form) {
      if(form.$invalid) {
        logger.error("Invalid details");
      } else {
        logger.success("user submitted successfully");
      }

    }


    self.newRole = function() {
        self.role = {};
        var modalInstance = $uibModal.open({
          animation : self.animationsEnabled,
          templateUrl : '/app/src/role/_new.html',
          controller : ModalInstanceCtrl,
          windowClass: 'z-dialog',
          controllerAs : '$ctrl'
        });

    };

    self.editRole = function(role) {
        self.role = role;
        var modalInstance = $uibModal.open({
          animation : self.animationsEnabled,
          templateUrl : 'app/src/role/_edit.html',
          controller : ModalInstanceCtrl,
          windowClass: 'z-dialog',
          controllerAs : '$ctrl'
        });

    };

    ModalInstanceCtrl.$inject = ['$uibModalInstance'];
    
    function ModalInstanceCtrl($uibModalInstance){
      var $ctrl = this;     
      $ctrl.role = _.clone(self.role);
      
      
      $ctrl.ok = function(form, action){       
        
        
        if(action=="roleAdd"){     
            self.addRole($ctrl.role);   
            console.log($ctrl.role);
        }
          
        if(action=="roleUpdate"){     
          self.updateRole($ctrl.role);   
          console.log($ctrl.role); 
        
         }
       
         $uibModalInstance.close();
      };
      
      
      $ctrl.cancel = function() {
        $uibModalInstance.dismiss('cancel');
      };
      
    }

    self.addRole = function(role) {
      self.master.push(role);
      pagination();
      logger.success("Role created successfully");
    }

    self.updateRole = function(role) {
      self.role.name = role.name;
      logger.success("Role updated successfully");
    }
  

  

  
   
  
  }

})();