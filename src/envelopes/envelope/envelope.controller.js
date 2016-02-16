(function() {
	'use strict';

	angular.module("myEnvelopes")
	.controller('EnvelopeController',['$state','envelopes',EnvelopeController]);

	function EnvelopeController($state,envelopes) {

		var vm = this;

		vm.envelope;

		activate();

		function activate() {
			vm.envelope = envelopes.getEnvelope($state.params.id);
		}
	}
})();