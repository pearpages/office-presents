(function() {
	'use strict';

	angular.module("common")
	.filter('yesNo', function() {
	    return function(input) {
	    	if(typeof input !== 'boolean') {
	    		throw new Error('Expect boolean in input var in yesNo filter');
	    	}
	        return input ? 'yes' : 'no';
	    }
	});
})();