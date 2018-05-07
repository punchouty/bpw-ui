// ************ NOTE ************************* //
// THIS FILE NEED TO FIRST TO LOAD HENCE AT TOP
// ************ NOTE ************************* //
(function(window) {
	window.__env = window.__env || {};


	var environment = "dev"; // can be dev, test or prod.

	window.__env.name = environment;
	// environment specific constants
	if (environment === "prod") {
		window.__env.dataApi = 'http://localhost:8989/data';		
		window.__env.user = "";
		window.__env.password = "";
	} else if (environment === "qa") {		
		window.__env.dataApi = 'http://edisuiqa.us-east-1.elasticbeanstalk.com/data';		
	} else {// DEFAULT - assume dev		
		window.__env.dataApi = 'http://localhost:8989/data';	
		window.__env.user = "";
		window.__env.password = "";
	}

}(this));
