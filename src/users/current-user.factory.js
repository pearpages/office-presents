(function() {
	'use strict';

	angular.module("office-presents")
	.factory('currentUser',['User',currentUser]);

	function currentUser(User) {
		var currentUser;

		init();

		return {
			getUser: getUser
		};

		function init() {
			if(currentUser === undefined) {
				currentUser = new User('lunderwood','Lamar Underwood');
			}
		}

		function getUser() {
			return currentUser;
		}
	}
})();