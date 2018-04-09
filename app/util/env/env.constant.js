(function() {
	'use strict';

	var env = {};
	if (window) {
		Object.assign(env, window.__env);
	}

	angular.module('util.env')
	.constant('__env', env)
	.constant('ACCESS_LEVEL',{
		'STORE_OWNER': 'STORE_OWNER' ,
		'STORE_VIEWER': 'STORE_VIEWER',
		'WAREHOUSE_OWNER' : 'WAREHOUSE_OWNER',
		'WHOLESALER': 'WHOLESALER',
		'DISTRIBUTOR_OWNER': 'DISTRIBUTOR_OWNER',
		'DISTRIBUTOR_VIEWER': 'DISTRIBUTOR_VIEWER',
		'DELIVERY_PERSON': 'DELIVERY_PERSON',
		'SALES_PERSON': 'SALES_PERSON' ,
		'MANUFACTURER_DISTRIBUTOR': 'MANUFACTURER_DISTRIBUTOR',
		'MANUFACTURER_VIEWER': 'MANUFACTURER_VIEWER',
		'MANUFACTURER_OWNER' : 'MANUFACTURER_OWNER',
		'SALES_EXECUTIVE': 'SALES_EXECUTIVE',
		'SALES_ADMIN': 'SALES_ADMIN',
		'SUPER_ADMIN': 'SUPER_ADMIN',
		'STORE_ADMIN': 'STORE_ADMIN',
		'SUPPORT_ADMIN' : 'SUPPORT_ADMIN',

	})
	.constant('ROLE_NAME',{
		'STORE_OWNER': 'Store Owner' ,
		'STORE_VIEWER': 'Store Viewer',
		'WAREHOUSE_OWNER' : 'Warehouse Owner',
		'WHOLESALER': 'Wholesaler',
		'DISTRIBUTOR_OWNER': 'Distributor Owner',
		'DISTRIBUTOR_VIEWER': 'Distributor Viewer',
		'DELIVERY_PERSON': 'Delivery Person',
		'SALES_PERSON': 'Sales Person' ,
		'MANUFACTURER_DISTRIBUTOR': 'Manufacturer Distributor',
		'MANUFACTURER_VIEWER': 'Manufacturer Viewer',
		'MANUFACTURER_OWNER' : 'Manufacturer Owner',
		'SALES_EXECUTIVE': 'Sales Executive',
		'SALES_ADMIN': 'Sales Admin',
		'STORE_ADMIN' : 'Store Admin',
		'SUPER_ADMIN': 'Admin',
		'CUSTOMER' : 'Customer',
		'SUPPORT_ADMIN' : 'Support Admin',
		
		
	})
	.constant('ORDER_STATES',{
		'NEW': 'New',
		'ADHOC' : 'Adhoc',
		'PENDING' : 'Pending',
		'ACCEPTED' : 'Accepted',
		'INVOICED' : 'Invoiced',
		'READY_TO_SHIP' : 'Ready to Ship',
		'DISPATCHED' : 'Dispatched',
		'DELIVERED' : 'Delivered',
		'PICK_UP' : 'Pick Up',
		'PAID' : 'Paid',
		'REJECTED' : 'Rejected',
		'CANCELLED' : 'Cancelled',
		'ABORTED' : 'Aborted',
		'REFUND' : 'Refund',
		'RETURNED' : 'Returned',
		'REPLACEMENT' : 'Replacement',
		'COMPLETED' : 'Completed',
		'ACCEPTED' : 'Accepted',
		'ADD_TO_REGISTER' : 'Register',
		'DELIVER_LATER' : 'Deliver Later',
		'NOT_KEPT' : 'Not Kept',
		
	});

})();
