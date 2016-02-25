describe('yes-no filter',function (){
	'use strict';

	var $filter;
	// $filter('filterName')(input, options);

	beforeEach(module('common'));
	beforeEach(inject(function (_$filter_) {
		$filter = _$filter_;
	}));

	it('should give an Exception message if the input is not a boolean value', function (){
		expect(function () {$filter('yesNo')(324)}).toThrow(new Error('Expect boolean in input var in yesNo filter'));
	});

	it('should return the string "yes" if the value given is true', function (){
		var result = $filter('yesNo')(true);
		expect(result).toBe('yes');
	});

	it('should return the string "no" if the value given is false', function (){
		var result = $filter('yesNo')(false);
		expect(result).toBe('no');
	});

});