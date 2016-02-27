describe('User',function () {
	'use strict';

	var User;
	var Bday;
	var Envelope;

	beforeEach(module('myUsers'));

	beforeEach(inject(function (_User_,_Bday_,_Envelope_){
		User = _User_;
		Bday = _Bday_;
		Envelope = _Envelope_;
	}));

	describe('constructor', function (){
		it('should accept only the right params',function (){
			expect(function(){new User()}).toThrow(new Error('String expected in variable id in User model constructor'));
			expect(function(){new User('id')}).toThrow(new Error('String expected in variable name in User model constructor'));
			expect(function(){new User('id','name')}).toThrow(new Error('Bday expected in variable bday in User model constructor'));
		});

		it('should initialize its properties well',function () {
			var sut = new User('user','user',new Bday(12,12));
			expect(sut.bdays).toEqual([]);
			expect(sut.responsible).toEqual([]);
			expect(sut.role).toBe('NORMAL');
			expect(sut.presents).toBe(true);
			expect(sut.contributions).toEqual([]);
		});
	});

	describe('removeEnvelope', function() {
		it('should have the right number of envelopes after removing one from its responsebilities', function() {
			var sut = new User('id','name',new Bday(12,12));
			var who = new User('id','name',new Bday(12,12));
			var envelope1 = new Envelope('bday',who,new Date(),new Date(),'some desk');
			sut.responsible.push(envelope1);
			var envelope2 = new Envelope('bday',who,new Date(),new Date(),'some desk');
			sut.responsible.push(envelope2);
			expect(sut.responsible.length).toBe(2);
			sut.removeEnvelope(envelope2);
			expect(sut.responsible.length).toBe(1);
		});

		it('should give false when the envelop does not exist',function (){
			var sut = new User('id','name',new Bday(12,12));
			var who = new User('id','name',new Bday(12,12));
			var envelope1 = new Envelope('bday',who,new Date(),new Date(),'some desk');
			sut.responsible.push(envelope1);
			var envelope2 = new Envelope('bday',who,new Date(),new Date(),'some desk');
			expect(sut.removeEnvelope(envelope2)).toBe(false);
		});
	});

	describe('getCurrentDate', function (){
		it('should give the birthday date for this year right',function (){
			var sut = new User('id','name',new Bday(12,12));
			expect(sut.getCurrentBday()).toEqual(new Date(new Date().getFullYear(),12,12));
		});
	});
	
});