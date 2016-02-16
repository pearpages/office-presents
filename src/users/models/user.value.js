(function() {
	'use strict';

	var User = function(id,name,bday) {
		this.id = id;
		this.name = name;
        this.bday = bday;
        this.bdays = [];
	};

	angular.module("myUsers")
	.value('User',User);

})();