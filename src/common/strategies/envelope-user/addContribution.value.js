(function() {
	'use strict';

	angular.module("common")
	.value('addContribution',function addContribution(user,envelope) {
		envelope.contributors.push(user);
		user.contributions.push(envelope);
	});

})();