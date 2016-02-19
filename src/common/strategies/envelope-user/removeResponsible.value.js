(function() {
	'use strict';

	angular.module("common")
	.value('removeResponsible',function (user,envelope){
		user.removeEnvelope(envelope);
		envelope.responsible = undefined;
	});

})();