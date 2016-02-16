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
			getShowAs: getShowAs,
			get: get
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

		function get() {
			if(mockUser !== undefined) {
				return mockUser;
			} else {
				return currentUser;
			}
		}

		function getUser() {
			return currentUser;
		}
	}
})();