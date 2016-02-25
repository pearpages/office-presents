describe('showAs',function () {
	'use strict';

	var $controller;
	var currentUser;
	var Bday;
	var User;
	var users;
	var notifications;
	var $state;

	beforeEach(module('myUsers'));
	beforeEach(inject(function (_$controller_,_users_,_currentUser_,_notifications_,_$state_,_User_,_Bday_){
		$controller = _$controller_;
		currentUser = _currentUser_;
		Bday = _Bday_;
		User = _User_;
		users = _users_;
		notifications = _notifications_;
		$state = _$state_;
	}));

	it('should show the logged user if there is no "showAs user" defined', function() {
		var user = new User('ppages','Pere Pages',new Bday(12,12));
		user.role = 'ADMIN';
		currentUser.setUser(user);

		var ShowAsController = $controller('ShowAsController',{users:users,currentUser: currentUser,notifications: notifications,$state:$state});

		expect(ShowAsController.userid).toBe('ppages');
	});

	it('should show the "showAs user" if it exists already', function() {
		var logged = new User('ppages','Pere Pages',new Bday(12,12));
		logged.role = 'ADMIN';
		currentUser.setUser(logged);

		var showAs = new User('pearpages','Another User',new Bday(12,12));
		currentUser.setShowAs(showAs);

		var ShowAsController = $controller('ShowAsController',{users:users,currentUser: currentUser,notifications: notifications,$state:$state});

		expect(ShowAsController.userid).toBe('pearpages');
	});

	// if the logged user is not ADMIN
	 
	// test showAs function

});