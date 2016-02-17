(function() {
	'use strict';

	angular.module("office-presents")
	.filter('yesNo', function() {
	    return function(input) {
	        return input ? 'yes' : 'no';
	    }
	});
})();