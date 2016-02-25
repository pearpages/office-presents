(function() {
	'use strict';

	angular.module("myUsers")
	.controller('ShowAsController',['users','currentUser','notifications','$state',ShowAsController]);

	function ShowAsController(users,currentUser,notifications,$state) {
		var vm = this;

		vm.userid;
		vm.showAs = showAs;

		activate();

		function activate() {
			if(currentUser.getUser().role !== 'ADMIN') {
				notifications.add('Wrong role','danger');
				$state.go('home');
			}

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