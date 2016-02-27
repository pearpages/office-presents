describe('Home.controller',function () {
    'use strict';

    var $controller;

    beforeEach(module('home'));

    beforeEach(inject(function (_$controller_) {
        $controller = _$controller_;
    }));

    it('Should have an empty controller',function () {
        var sut = $controller('HomeController', {});
        expect(Object.keys(sut).length).toBe(0);
    });
});