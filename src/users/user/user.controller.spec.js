describe('user.controller',function(){
	'use strict';

	var users,$state,currentUser,notifications,$controller,Bday;

	beforeEach(module('myUsers'));
	beforeEach(inject(function(_users_,_$state_,_currentUser_,_notifications_,_$controller_,_Bday_){
		users = _users_;
		$state = _$state_;
		currentUser = _currentUser_;
		notifications = _notifications_;
		$controller = _$controller_;
		Bday = _Bday_;
	}));

	it('should load the user in the url and the logged user', function(){
		var logged = users.make('perepages','Pere Pages',new Bday(12,12));
		$state.params.id = 'perepages';
		currentUser.setUser(logged);

		var sut = $controller('UserController',{users:users,$state:$state,currentUser:currentUser,notifications:notifications});

		expect(sut.user).toEqual(users.getUser('perepages'));
		expect(sut.logged).toEqual(currentUser.get());
		expect(sut.user.presents).toEqual(currentUser.get().presents);
	});

	it('should save the user',function (){
		var logged = users.make('perepages','Pere Pages',new Bday(12,12));
		$state.params.id = 'perepages';
		currentUser.setUser(logged);

		var sut = $controller('UserController',{users:users,$state:$state,currentUser:currentUser,notifications:notifications});
		sut.inputPresents = false;
		sut.save();
		expect(users.getUser($state.params.id).presents).toBe(false);
		sut.inputPresents = true;
		sut.save();
		expect(users.getUser($state.params.id).presents).toBe(true);
	});

});