# BPW start

There are two ways to run
1) Node js
	or
2) Xampp server



	1) Install Node js then: 
	
		a) npm install -g http-server 

		b) cd to bpw directory and run http-server -p port

		c) localhost:port


	2) Via Xampp	

		a)  Install xampp 

		b)  copy or clone bpw  folder to C:\xampp\htdocs (windows)

		c) run apache server for xampp control panel

		d) go to link localhost/foldername eg (localhost/bpw)


Page Wise Controller


		page: login,  url: http://localhost:8989/#/auth/signin, controller: app/util/auth/signin.controller.js

		page: Forgot password,  url: http://localhost:8989/#/auth/forgot, controller: app/util/auth/forgot_password.controller.js

		page: signup,  url: http://localhost:8989/#/auth/signup, controller:app/util/auth/signup.controller.js

		page: new Organization,  url: http://localhost:8989/#/auth/organization/new, controller: app/util/auth/organization/organizationNew.controller.js

		page: Dashboard,  url: http://localhost:8989/#/dashboard, controller: app/src/dashboard/stuff.controller.js

		page: Organizations,  url: http://localhost:8989/#/organizations, controller: app/src/organization/organizationsList.controller.js

		page: Add Organization,  url:http://localhost:8989/#/organizations/new, controller: app/src/organization/organizationNew.controller.js

		page: Organization View,  url:http://localhost:8989/#/organizations/5acb35c790c30b479a55f88e/view, controller: app/src/organization/organizationView.controller.js

		page: PROJECTS LIST,  url: http://localhost:8989/#/projects, controller: app/src/project/projectsList.controller.js

		page: Project Details,  url: http://localhost:8989/#/projects/5acb35c790c30b479a55f88e/view, controller: app/src/project/projectView.controller.js


		page: SUB PROJECT,  url: http://localhost:8989/#/projects/sub/5acb35c73a5dd5dfff3ae8e4/view, controller: app/src/project/subProjectView.controller.js

		page: New Project,  url: http://localhost:8989/#/projects/new, controller: app/src/project/project.controller.js    

		page: Quick New Project,  url: http://localhost:8989/#/projects/quicknew, controller: app/src/project/quickNew.controller.js

		page: Users,  url: http://localhost:8989/#/users, controller: app/src/user/usersList.controller.js
		page: Add User,  url:http://localhost:8989/#/users/new, controller: app/src/user/userNew.controller.js
		page: User View,  url: http://localhost:8989/#/users/5acb35c7ca44043df753db3a/view, controller: app/src/user/userView.controller.js

		page: Roles,  url: http://localhost:8989/#/roles, controller: app/src/role/role.controller.js
		page: Approvals,  url: http://localhost:8989/#/approvals, controller: app/src/approval/approvalsList.controller.js

		page: profile,  url: http://localhost:8989/#/profile/me, controller: app/profile/profile.controller.js


		*No build required for UI Just refresh