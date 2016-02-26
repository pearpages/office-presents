describe('currentUser',function (){
	'use strict';

	var currentUser;
	var users;
	var Bday;

	beforeEach(module('myUsers'));

	beforeEach(inject(function (_currentUser_,_users_,_Bday_){
		currentUser = _currentUser_;
		users = _users_;
		Bday = _Bday_;
	}));

	it('should only accept User object as parameters', function () {
		expect( function(){ currentUser.setUser('333'); } ).toThrow(new Error('user is not an instance of User'));
		expect( function(){ currentUser.setShowAs('333'); } ).toThrow(new Error('user is not an instance of User'));
	});

	it('should let you set and get the logged user', function() {
		var user = users.make('perepages','Pere Pages',new Bday(12,12));
		currentUser.setUser(user);
		expect(currentUser.getUser()).toEqual(user);
		expect(currentUser.get()).toEqual(user);
	});

	it('should give you undefined when there is none', function() {
		expect(currentUser.getUser()).toBe(undefined);
	});

	it('should let you set the showAs user and get it back', function() {
		var user = users.make('perepages','Pere Pages',new Bday(12,12));
		currentUser.setShowAs(user);
		expect(currentUser.getShowAs()).toEqual(user);
		expect(currentUser.get()).toEqual(user);
	});

	it('should return undefined if the showAs user does not exist', function() {
		expect(currentUser.getShowAs()).toBe(undefined);
	});
	
	it('should return the showAs user if exists or the logged user if it does not', function() {
		var logged = users.make('perepages','Pere Pages',new Bday(12,12));
		var showAs = users.make('pearpages','@pearpages',new Bday(12,12));

		currentUser.setUser(logged);
		currentUser.setShowAs(showAs);

		expect(currentUser.get()).toEqual(showAs);
	});

});