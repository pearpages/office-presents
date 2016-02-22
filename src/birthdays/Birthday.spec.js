describe('birthday.value',function() {
	
    var Birthday;
    var User;
    var Envelope;
    var Bday;

    beforeEach(module('myBdays'));
    beforeEach(inject(function(_Birthday_,_User_,_Envelope_,_Bday_){
        Birthday = _Birthday_;
        User = _User_;
        Envelope = _Envelope_;
        Bday = _Bday_;
    }));

    it('A new Birthday should have valid parameters', function (){
        var sut = new Birthday(new User('id','name',new Bday(12,12)),new Date(),new Envelope('birthday',new User('id','name',new Bday(12,12)),new Date(),new Date(),'some desk'));
        expect(sut.date).toEqual(jasmine.any(Date));
        expect(sut.user).toEqual(jasmine.any(User));
        expect(sut.envelope).toEqual(jasmine.any(Envelope));
    });
    
    it('A new Birthday object should have id 1 and the second 2 and so on',function() {
        var oneBirthday = new Birthday(new User('id','name',new Bday(12,12)),new Date(),new Envelope('birthday',new User('id','name',new Bday(12,12)),new Date(),new Date(),'some desk'));
        expect(oneBirthday._id).toBe(1);
        var secondBirthday = new Birthday(new User('id','name',new Bday(12,12)), new Date(),new Envelope('birthday',new User('id','name',new Bday(12,12)),new Date(),new Date(),'some desk'));
        expect(secondBirthday._id).toBe(2);
    });

});