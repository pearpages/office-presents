(function() {
	'use strict';

	angular.module("common")
	.factory('notifications',[notifications]);

	function notifications() {

		var messages = [];

		return {
			add: add,
			get: get,
			remove: remove
		}

		function add(message,type) {

			// default, primary, success, info, warning, danger
			messages.push({message: message, type: type});
		}

		function remove(index) {
			if(messages[index] !== undefined) {
				messages.splice(index,1);	
			}
		}

		function get() {
			return messages;
		}
	}
})();