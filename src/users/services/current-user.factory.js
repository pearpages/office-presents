(function() {
	'use strict';

	angular.module("myUsers")
	.factory('currentUser',['User','users',currentUser]);

	function currentUser(User,users) {
		var currentUser;
		var mockUser;

		return {
			getUser: getUser,
			setUser: setUser,
			setShowAs: setShowAs,
			getShowAs: getShowAs,
			get: get,
			loggout: loggout
		};

		/**
		 * 
		 * @param {User} user
		 */
		function setUser(user) {
			currentUser = user;
		}

		function loggout() {
			currentUser = undefined;
			mockUser = undefined;
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