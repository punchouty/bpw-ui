(function() {
  'use strict';
  angular
    .module('util.help')
   .factory('notification8',notification8);

  // notificationFactory.$inject=['']
  function notification8 () {  

   var service = {   
      error: error,
      info: info,
      success: success     
    };

    function error(message, heading) {     
      notific8(message,{color: 'ruby',horizontalEdge: 'bottom',heading: heading, life: 5000,queue:true});
                
    }

    function info(message, heading) {     
      notific8(message,{color: 'lime',horizontalEdge: 'bottom',heading: heading, life: 5000,queue:true});
                
    }

    function success(message, heading) {        
        notific8(message,{color: 'teal',horizontalEdge: 'bottom',heading: heading, life: 5000,queue:true});
            
    }

   

    return service;
  };
})();
