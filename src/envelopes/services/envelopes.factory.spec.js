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
	
	describe('getAssignedEnvelopes',function (){
		it('Should return an empty array when there are no new envelopes', function() {
			var sut = envelopes.getAssignedEnvelopes();
			expect(sut.length).toBe(0);
		});

		it('Should return the right number of open envelopes', function() {
			var envelope1 = envelopes.make('birthday',new User(),new Date(),new Date(),'Desk');
			envelope1.addResponsible(new User(),envelope1);
			var envelope2 = envelopes.make('birthday',new User(),new Date(),new Date(),'Desk');
			envelope1.addResponsible(new User(),envelope2);
			var envelope3 = envelopes.make('birthday',new User(),new Date(),new Date(),'Desk');
			envelope1.addResponsible(new User(),envelope3);
			var envelope4 = envelopes.make('birthday',new User(),new Date(),new Date(),'Desk');
			envelope1.addResponsible(new User(),envelope4);
			var envelope5 = envelopes.make('birthday',new User(),new Date(),new Date(),'Desk');
			envelope1.addResponsible(new User(),envelope5);

			var sut = envelopes.getAssignedEnvelopes();
			expect(sut.length).toBe(5);
		});
	});
	
	describe('getEnvelope',function (){

	});
	
});