(function() {
	'use strict';

	angular.module("myEnvelopes")
	.controller('EnvelopeController',['$state','envelopes','currentUser',EnvelopeController]);

	function EnvelopeController($state,envelopes,currentUser) {

		var vm = this;

		vm.envelope;
		vm.show = show;
		vm.contribute = contribute;
		vm.removeContibution = removeContibution;

		activate();

		function activate() {
			vm.envelope = envelopes.getEnvelope($state.params.id);
		}

		function show() {
			if(vm.envelope.responsible === undefined || vm.envelope.responsible === null){
				return 'ALERT';
			} else if (vm.envelope.hasContributor(currentUser.get())) {
				return 'REMOVE';
			} else {
				return 'CONTRIBUTE';
			}
		}

		function contribute() {
			vm.envelope.addContributor(currentUser.get());
		}

		function removeContibution() {
			vm.envelope.removeContributor(currentUser.get());
		}
	}
})();