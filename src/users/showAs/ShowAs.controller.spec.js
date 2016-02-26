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
	beforeEach(inject(function (_$controller_,_users_,_currentUser_,_notifications_,_$state_,_Bday_){
		$controller = _$controller_;
		currentUser = _currentUser_;
		Bday = _Bday_;
		users = _users_;
		notifications = _notifications_;
		$state = _$state_;
	}));

	it('should show the logged user if there is no "showAs user" defined', function() {
		var user = users.make('ppages','Pere Pages',new Bday(12,12));
		user.role = 'ADMIN';
		currentUser.setUser(user);

		var ShowAsController = $controller('ShowAsController',{users:users,currentUser: currentUser,notifications: notifications,$state:$state});

		expect(ShowAsController.userid).toBe('ppages');
	});

	it('should show the "showAs user" if it exists already', function() {
		var logged = users.make('ppages','Pere Pages',new Bday(12,12));
		logged.role = 'ADMIN';
		currentUser.setUser(logged);

		var showAs = users.make('pearpages','Another User',new Bday(12,12));
		currentUser.setShowAs(showAs);

		var ShowAsController = $controller('ShowAsController',{users:users,currentUser: currentUser,notifications: notifications,$state:$state});

		expect(ShowAsController.userid).toBe('pearpages');
	});

	it('should redirect to the home page if the logged user does not have the role admin and notify you', function() {
		var logged = users.make('ppages','Pere Pages',new Bday(12,12));
		logged.role = 'NORMAL';
		currentUser.setUser(logged);

		spyOn($state, 'go');

		var ShowAsController = $controller('ShowAsController',{users:users,currentUser: currentUser,notifications: notifications,$state:$state});

		// expect($state.go).toHaveBeenCalledWith(expectedState, expectedParams); <-- as an example of the spy function with state
		expect($state.go).toHaveBeenCalledWith('home');
		expect(notifications.get()).toEqual([{message: 'Wrong role',type:'danger'}]);
	});
	
	it('should set a new user to be shown and notify it',function () {
		// test showAs function
		
		var logged = users.make('ppages','Pere Pages',new Bday(12,12));
		logged.role = 'ADMIN';
		currentUser.setUser(logged);

		var showAs = users.make('pearpages','Another User',new Bday(12,12));

		var ShowAsController = $controller('ShowAsController',{users:users,currentUser: currentUser,notifications: notifications,$state:$state});

		ShowAsController.showAs('pearpages');

		expect(currentUser.get().id).toBe('pearpages');
		expect(notifications.get()).toEqual([{message: 'User changed', type: 'success'}]);
	});
	

});