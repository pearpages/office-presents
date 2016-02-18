(function() {
	'use strict';

	angular.module("myUsers")
	.controller('ShowAsController',['users','currentUser','notifications',ShowAsController]);

	function ShowAsController(users,currentUser,notifications) {
		var vm = this;

		vm.users;
		vm.userid;
		vm.message;
		vm.showAs = showAs;

		activate();

		function activate() {
			vm.users = users.getAll();
			vm.message = null;
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