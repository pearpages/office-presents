describe('birthday.factory',function() {

    beforeEach(module('myBdays'));

    var birthdays;

    beforeEach(inject(function(_birthdays_) {
        birthdays = _birthdays_;
    }));

    it('Should return an empty array when there no users added yet', function () {
        expect(birthdays.getAll().length).toBe(0);
    });
});