describe('birthday.factory',function() {

    beforeEach(module('myBdays'));

    var birthdays;
    var User;
    var Envelope;

    beforeEach(inject(function(_birthdays_,_User_,_Envelope_) {
        birthdays = _birthdays_;
        User = _User_;
        Envelope = _Envelope_;
    }));

    describe('make', function() {
    	it('Should return an empty array when there no users added yet', function () {
        expect(birthdays.getAll().length).toBe(0);
    	});

    	it('Should return an array with one value when whe create a birthday', function (){
    		birthdays.make(new User(),new Date(),new Envelope());
    		expect(birthdays.getAll().length).toBe(1);
    	});
    });

    it('should get a Birthday for a given id', function() {
    	var birthday = birthdays.make(new User(),new Date(),new Envelope());
    	var birthday2 = birthdays.get(birthday._id);

    	expect(birthday).toBe(birthday2);
    });

    it('should return all birthdays created', function (){
    	var test = [];
    	test.push(birthdays.make(new User(),new Date(),new Envelope()));
    	test.push(birthdays.make(new User(),new Date(),new Envelope()));
    	test.push(birthdays.make(new User(),new Date(),new Envelope()));
    	test.push(birthdays.make(new User(),new Date(),new Envelope()));

    	var sut = birthdays.getAll();

    	for (var i = test.length - 1; i >= 0; i--) {
    		expect(test[i]).toBe(sut[i]);
    	};
    });

});