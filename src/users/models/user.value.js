(function() {
	'use strict';

	var User = function(id,name) {
		this.id = id;
		this.name = name;
        this.bdays = [];
	};

	angular.module("myUsers")
	.value('User',User);

})();