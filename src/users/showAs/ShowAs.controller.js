(function() {
	'use strict';

	angular.module("myUsers")
	.controller('ShowAsController',['currentUser','notifications',ShowAsController]);

	function ShowAsController(currentUser,notifications) {
		var vm = this;

		vm.userid;
		vm.showAs = showAs;

		activate();

		function activate() {
			if(currentUser.getShowAs() === undefined) {
				vm.userid = currentUser.getUser().id;	
			} else {
				vm.userid = currentUser.getShowAs().id;
			}
		}

		function showAs() {
			var user = users.getUser(vm.userid);
			if(user !== null){
				currentUser.setShowAs(user);
				notifications.add('User changed','success');
			}
		}
	}
})();