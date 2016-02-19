(function() {
	'use strict';

	angular.module("common")
	.value('removeContribution',function removeContribution (user,envelope) {
		removeEnvelopeContributor(user,envelope);
		removeUserContribution(user,envelope);
	});

	function removeEnvelopeContributor(contributor,envelope) {
        var i = envelope.contributors.indexOf(contributor);
        if(i !== -1){
            envelope.contributors.splice(i,1);
        }
    }

    function removeUserContribution(contributor,envelope) {
        var i = contributor.contributions.indexOf(envelope);
        if(i !== -1){
            contributor.contributions.splice(i,1);
        }
    }

})();

