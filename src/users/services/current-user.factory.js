(function() {
	'use strict';

	angular.module("myUsers")
	.factory('currentUser',['User','users',currentUser]);

	function currentUser(User,users) {
		var currentUser;
		var mockUser;

		init();

		return {
			getUser: getUser,
			setShowAs: setShowAs,
			getShowAs: getShowAs
		};

		function init() {
			if(currentUser === undefined) {
				currentUser = users.getUser('LamarUnderwood');
			}
		}

		/**
		 * Show as another user
		 * @param  {User} user 
		 */
		function setShowAs(user) {
			mockUser = user;
		}

		function getShowAs() {
			return mockUser;
		}

		function getUser() {
			return currentUser;
		}
	}
})();