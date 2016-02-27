describe('Bday',function (){
    'use strict';

    var Bday;

    beforeEach(module('myUsers'));

    beforeEach(inject(function (_Bday_) {
        Bday = _Bday_;
    }));

    it('should have the right parameters when constructing', function() {
        expect(function() { new Bday();}).toThrow(new Error('Number expected in variable month in myUsers::Bday constructor'));
        expect(function() { new Bday('boom');}).toThrow(new Error('Number expected in variable month in myUsers::Bday constructor'));
        expect(function() { new Bday(4);}).toThrow(new Error('Number expected in variable day in myUsers::Bday constructor'));
        expect(function() { new Bday(4,{});}).toThrow(new Error('Number expected in variable day in myUsers::Bday constructor'));
    });

    it('should give the next birthday date given a bday date',function (){

    });

});