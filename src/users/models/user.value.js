(function() {
	'use strict';

	var User = function(id,name) {
		this.id = id;
		this.name = name;
	}

	angular.module("myUsers")
	.value('User',User);

})();