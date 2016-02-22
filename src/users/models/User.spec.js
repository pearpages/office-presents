describe('User',function () {

	var User;
	var Bday;

	beforeEach(module('myUsers'));
	beforeEach(inject(function (_User_,_Bday_){
		var User = _User_;
		var Bday = _Bday_;
	}));

	describe('constructor', function (){
		var sut = new User('user','user',new Bday(12,12));
	});

	describe('remove', function() {

	});

	describe('getCurrentDate', function (){

	});
	
});