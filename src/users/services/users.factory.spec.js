describe('users.factory',function (){
	'use strict';

	var users,Bday,User;

	beforeEach(module('myUsers'));
	beforeEach(inject(function(_users_,_Bday_,_User_){
		users = _users_;
		Bday = _Bday_;
		User = _User_;
	}));

	it('should accept only undefined or User', function () {
		expect(function(){ users.getOneRandom(123)}).toThrow(new Error('not variable should be a User or undefined'));
	});

	it('should get all the users sorted by name', function(){
		var user1 = users.make('1','john', new Bday(12,12));
		var user2 = users.make('1','adam', new Bday(12,12));
		var user3 = users.make('1','gabriel', new Bday(12,12));
		var user4 = users.make('1','karine', new Bday(12,12));

		expect(users.getAll()).toEqual([user2,user3,user1,user4]);
	});

	it('should get a random user',function (){
		// when there's none
		expect(users.getOneRandom()).toBe(undefined);
		// when there's one
		var john = users.make('1','john', new Bday(12,12));
		expect(users.getOneRandom()).toEqual(jasmine.any(User));
		/*
		expect(users.getOneRandom(john)).toBe(undefined);
		// when there are two and we don't want one
		var adam = users.make('1','adam', new Bday(12,12));
		expect(users.getOneRandom(john)).toEqual(adam);
		*/
	});

    // getOneRandom
    // getUser
    // make
});