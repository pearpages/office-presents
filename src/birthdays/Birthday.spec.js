describe('birthday.value',function() {
	
    var Birthday;
    var User;
    var Envelope;

    beforeEach(module('myBdays'));
    beforeEach(inject(function(_Birthday_,_User_,_Envelope_){
        Birthday = _Birthday_;
        User = _User_;
        Envelope = _Envelope_;
    }));

    it('A new Birthday should have valid parameters', function (){
        var sut = new Birthday(new User(),new Date(),new Envelope());
        expect(sut.date).toEqual(jasmine.any(Date));
        expect(sut.user).toEqual(jasmine.any(User));
        expect(sut.envelope).toEqual(jasmine.any(Envelope));
    });
    
    it('A new Birthday object should have id 1 and the second 2 and so on',function() {
        var oneBirthday = new Birthday(new User(),new Date(),new Envelope());
        expect(oneBirthday._id).toBe(1);
        var secondBirthday = new Birthday(new User(), new Date(),new Envelope());
        expect(secondBirthday._id).toBe(2);
    });

});