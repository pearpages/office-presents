describe('Envelope model', function () {

	var Envelope;
	var User;

	beforeEach(module('myEnvelopes'));

	beforeEach(inject(function(_Envelope_,_User_) {
		Envelope = _Envelope_;
		User = _User_;
	}));

	it('Should create consecutive ids', function (){
		var sut1 = new Envelope('birthday',new User(),new Date(),new Date(),'some desk');
		expect(sut1._id).toBe(1);
		var sut2 = new Envelope('birthday',new User(),new Date(),new Date(),'some desk');
		expect(sut2._id).toBe(2);
	});

	it('Should be able to tell us if the Envelope has or has not a contributor', function () {
		var sut1 = new Envelope('birthday',new User(),new Date(),new Date(),'some desk');
		var user1 = new User();

		sut1.contributors.push(user1);

		expect(sut1.hasContributor(user1)).toBe(true);
	});
});