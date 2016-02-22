describe('User',function () {

	var User;
	var Bday;

	beforeEach(module('myUsers'));
	beforeEach(inject(function (_User_,_Bday_){
		User = _User_;
		Bday = _Bday_;
	}));

	describe('constructor', function (){
		it('should initialize its properties well',function () {
			var sut = new User('user','user',new Bday(12,12));
			expect(sut.bdays).toEqual([]);
			expect(sut.responsible).toEqual([]);
			expect(sut.role).toBe('NORMAL');
			expect(sut.presents).toBe(true);
			expect(sut.contributions).toEqual([]);
		});
	});

	describe('remove', function() {

	});

	describe('getCurrentDate', function (){

	});
	
});