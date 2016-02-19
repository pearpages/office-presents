(function() {
	'use strict';

	angular.module("common")
	.value('addResponsible',function (user,envelope){
		user.responsible.push(envelope);
		envelope.responsible = user;
	});

})();