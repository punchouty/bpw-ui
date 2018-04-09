(function() {
	'use strict';

	window.app = angular.module('app', [ 
        "ui.router", 
        "ui.bootstrap", 
        "oc.lazyLoad",
        "ngSanitize",
        "util.logger",
        "util.auth",
        "util.env",
        "util.error",
        "util.exception",
        "util.router",
        "app.profile",
    ]);
})();