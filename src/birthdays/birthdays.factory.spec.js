describe('birthday.factory',function() {

    beforeEach(module('myBdays'));

    var birthdays;
    var User;
    var Envelope;
    var Bday;

    beforeEach(inject(function(_birthdays_,_User_,_Envelope_,_Bday_) {
        birthdays = _birthdays_;
        User = _User_;
        Envelope = _Envelope_;
        Bday = _Bday_;
    }));

    it('should check that the parameters are correct',function (){
        expect(function(){birthdays.make()}).toThrow(new Error('User expected'));
        expect(function(){birthdays.make(new User('id','name',new Bday(12,12)))}).toThrow(new Error('Date expected'));
        expect(function(){birthdays.make(new User('id','name',new Bday(12,12)),new Date())}).toThrow(new Error('Envelope expected'));
    });

    describe('make', function() {
    	it('Should return an empty array when there no users added yet', function () {
        expect(birthdays.getAll().length).toBe(0);
    	});

    	it('Should return an array with one value when whe create a birthday', function (){
    		birthdays.make(new User('id','name',new Bday(12,12)),new Date(),new Envelope('birthday',new User('id','name',new Bday(12,12)),new Date(), new Date(), 'desk'));
    		expect(birthdays.getAll().length).toBe(1);
    	});
    });

    it('should get a Birthday for a given id, if the id does not exist, return null', function() {
    	var birthday = birthdays.make(new User('id','name',new Bday(12,12)),new Date(),new Envelope('birthday',new User('id','name',new Bday(12,12)),new Date(), new Date(), 'desk'));
    	var birthday2 = birthdays.get(birthday._id);

    	expect(birthday).toBe(birthday2);

        expect(birthdays.get(9999)).toBe(null);
    });

    it('should return all birthdays created', function (){
    	var test = [];
    	test.push(birthdays.make(new User('id','name',new Bday(12,12)),new Date(),new Envelope('birthday',new User('id','name',new Bday(12,12)),new Date(), new Date(), 'desk')));
    	test.push(birthdays.make(new User('id','name',new Bday(12,12)),new Date(),new Envelope('birthday',new User('id','name',new Bday(12,12)),new Date(), new Date(), 'desk')));
    	test.push(birthdays.make(new User('id','name',new Bday(12,12)),new Date(),new Envelope('birthday',new User('id','name',new Bday(12,12)),new Date(), new Date(), 'desk')));
    	test.push(birthdays.make(new User('id','name',new Bday(12,12)),new Date(),new Envelope('birthday',new User('id','name',new Bday(12,12)),new Date(), new Date(), 'desk')));

    	var sut = birthdays.getAll();

    	for (var i = test.length - 1; i >= 0; i--) {
    		expect(test[i]).toBe(sut[i]);
    	}
    });

});