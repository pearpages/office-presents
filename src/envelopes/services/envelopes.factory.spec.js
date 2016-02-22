describe('envelopes.factory',function (){

	var envelopes;
	var Envelope;
	var User;
	var addResponsible,removeResponsible,addContribution,removeContribution;

	beforeEach(module('myEnvelopes'));
	beforeEach(inject(function(_envelopes_,_Envelope_,_User_,_addResponsible_,_removeResponsible_,_addContribution_,_removeContribution_) {
		envelopes = _envelopes_;
		Envelope = _Envelope_;
		User = _User_;
		addResponsible = _addResponsible_;
		removeResponsible = _removeResponsible_;
		addContribution = _addContribution_
		removeContribution = _removeContribution_;
	}));

	describe('make',function (){
		it('Should be able to create an Envelope',function () {
			var sut = envelopes.make('birthday',new User(),new Date(),new Date(),'desk');
			expect(sut).toEqual(jasmine.any(Envelope));
		});
		it('Should have strategies attached in each Envelope',function () {
			var sut = envelopes.make('birthday',new User(),new Date(),new Date(),'desk');
			expect(sut.addResponsible).toEqual(addResponsible);
            expect(sut.removeResponsible).toEqual(removeResponsible);
            expect(sut.addContribution).toEqual(addContribution);
            expect(sut.removeContribution).toEqual(removeContribution);
		});
	});
	
	//getOpenEnvelopes
	//getEnvelope
	
});