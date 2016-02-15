(function() {
	'use strict';

	var User = function(id,name) {
		this.id = id;
		this.name = name;
	}

	angular.module("office-presents")
	.value('User',User);

})();