(function() {
	'use strict';

	angular.module("myEnvelopes")
	.directive('openEnvelopes',['envelopes','NgTableParams','currentUser',openEnvelopes]);

	function openEnvelopes(envelopes,NgTableParams,currentUser) {
		return {
				restrict: 'E',
				bindToController: true,
				controllerAs: 'vmd',
				controller: controller,
				scope:{
					
				},
				templateUrl: 'src/envelopes/directives/open-envelopes/partials/open-envelopes.html',
			};
		
		
			function controller() {
				var vmd = this;
		
		        vmd.envelopes;
		        vmd.user;        
		        vmd.addContributor = addContributor;
		        vmd.removeContributor = removeContributor;

		        activate();

		        function activate() {
		        	vmd.user = currentUser;	
		        	var open = envelopes.getOpenEnvelopes(vmd.user.get());
		        	vmd.envelopes = new NgTableParams({page:1,count: 10},{data: open});
		        } 

		        function addContributor(envelope) {
		        	envelope.addContribution(currentUser.get(),envelope);
		        }

		        function removeContributor(envelope) {
		        	envelope.removeContribution(currentUser.get(),envelope);
		        }
			}
	}
})();