(function () {
  'use strict';

  angular
    .module('app')
    .controller('projectCtrl', projectCtrl);

  projectCtrl.$inject = ['$state', '$stateParams', '$scope', '$http', 'logger', 'NgTableParams', '$filter', '$uibModal' , 'projectFactory' , '$rootScope', 'Upload' ];
  /* @ngInject */
  function projectCtrl($state, $stateParams, $scope, $http, logger, NgTableParams, $filter , $uibModal, projectFactory , $rootScope, Upload) {

    var self = this;

    self.totalCount = 100;    
    self.uploadResult = false;

    self.currentStep = 1;
    self.steps = [
      {
        step: 1,
        name: "New Project",
        template: "app/src/project/partials/project.html",
        progress: 25
      },
      {
        step: 2,
        name: "Upload Document",
        template: "app/src/project/partials/upload.html",
        progress: 50
      },   
      {
        step: 3,
        name: "Document Sequencing",
        template: "app/src/project/partials/sequence.html",
        progress: 75
      },  
      {
        step: 4,
        name: "User Assignment",
        template: "app/src/project/partials/assignment.html",
        progress: 100
      }           
    ];
            
    
    self.gotoStep = function(newStep) {
      self.currentStep = newStep;
    }
    
    self.getStepTemplate = function(){
      for (var i = 0; i < self.steps.length; i++) {
            if (self.currentStep == self.steps[i].step) {
                return self.steps[i].template;
            }
        }
    }

    self.getProgress = function() {
      for (var i = 0; i < self.steps.length; i++) {
            if (self.currentStep == self.steps[i].step) {
                return self.steps[i].progress;
            }
        }
    }

    self.check = function(step, form) {
      if(step == 1 && form.form1) {
         return form.form1.$invalid
      } else if(step == 2) {
         return !self.uploadResult;
      }
      return false;
    }

    self.deleteFile = function(files, file) {
      console.log(files, file);

      for(var i = 0; i < files.length; i++) {     
        if(files[i].name == file.name) {
          files.splice(i, 1);
        }
      }      
    }

    self.uploadFiles = function () {
      console.log("files ",self.files);

        if (self.files && self.files.length) {        
          // or send them all together for HTML5 browsers:
          // Upload.upload({
          //   url: self.imageUploadUrl, 
          //   data: {files: self.files}, arrayKey: ''
          // }).then(function (resp) {
          //     console.log('Success ',resp );
          //     self.uploadResult = true;
          //     self.files = [];             
          //     self.checkout();

          // }, function (resp) {
          //     console.log('Error status: ' + resp.status);
          // }, function (evt) {
          //     // var progressPercentage = parseInt(100.0 * evt.loaded / evt.total);
          //     console.log('progress: ' +Math.min(100, parseInt(100.0 * evt.loaded / evt.total)) + '% ' );
          //     $scope.progress = Math.min(100, parseInt(100.0 * evt.loaded / evt.total));
          //     // + evt.config.data.file.name
          // });

          self.uploadResult = true;
          $scope.progress= 100;
          self.files = []; 
          logger.info("files uploaded")
        }
     
    }


    self.list = [
                  {
                    name:"file 1",
                    url: "http://www.abc.com/file1"
                  },
                  {
                    name:"file 2",
                    url: "http://www.abc.com/file2"
                  },
                  {
                    name:"file 3",
                    url: "http://www.abc.com/file3"
                  },
                  {
                    name:"file 4",
                    url: "http://www.abc.com/file4"
                  },
                  {
                    name:"file 5",
                    url: "http://www.abc.com/file5"
                  },
    ];

    $scope.moveUp = function(item) {
      var crntPos = self.list.indexOf(item);
      if (crntPos > 0) {
        self.list.splice(crntPos, 1);
        self.list.splice(crntPos - 1, 0, item);
      }
    };
    
    $scope.moveDown = function(item) {
      var crntPos = self.list.indexOf(item);
      if (crntPos < self.list.length) {
        self.list.splice(crntPos, 1);
        self.list.splice(crntPos + 1, 0, item);
      }
    };


    $scope.sortingLog = [];
  
    $scope.sortableOptions = {
      update: function(e, ui) {
        
      },
      stop: function(e, ui) {
        console.log("stopped",$scope.list);
      }
    };




    activate();

    function activate() {
      self.projects=[];
      self.users=[];
      
      projectFactory.getProjects()
          .then(function(response) {  
               self.projects = response.data;                 
               console.log(self.projects);
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

    self.saveProject = function() {
      $state.reload();
      logger.info("Done");
    }

    self.selectUser = function(subject) {
      self.selectedSubject = subject;
         var modalInstance = $uibModal.open({
            animation : self.animationsEnabled,           
            templateUrl : 'app/src/project/partials/user.html',
            controller : ModalInstanceCtrl,
            windowClass: 'z-dialog',
            controllerAs : '$ctrl'
          });      

    }

    self.updateUser = function(subject, user) {
      console.log(subject, user);
        subject.user = user;
    }
  

    ModalInstanceCtrl.$inject = [ '$uibModalInstance' ];

      function ModalInstanceCtrl($uibModalInstance) {
        var $ctrl = this;
        $ctrl.subject = self.selectedSubject;
        $ctrl.users = self.users;
       
        $ctrl.ok = function(form, action) {   
          if (action == "AssignUser") {
            self.updateUser($ctrl.subject,$ctrl.subjectUser);
            console.log($ctrl.subjectUser);
            //$uibModalInstance.close();
          }         
          $uibModalInstance.close();         
        };

        $ctrl.cancel = function() {
          $uibModalInstance.dismiss('cancel');
        }; 

        $ctrl.getUsers= function(phrase) {
          console.log(phrase, $ctrl.users)

         var returnData = _.filter($ctrl.users, function(o) { 
                    return o.name.includes(phrase); 
                 });

         console.log(returnData);
         return $ctrl.users;
          // self.users;
        }
      
      }
  
  
   
  
  }

})();