(function() {
	'use strict';

	angular.module("common")
	.filter('yesNo', function() {
	    return function(input) {
	        return input ? 'yes' : 'no';
	    }
	});
})();