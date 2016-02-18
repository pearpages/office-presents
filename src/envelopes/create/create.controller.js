(function() {
	'use strict';

	angular.module("myEnvelopes")
	.controller('CreateEnvelopeController',['currentUser',CreateEnvelopeController]);

	function CreateEnvelopeController(currentUser) {

		var vm = this;

		vm.who;
		vm.responsible;
		vm.currentUser = currentUser;
	}
})();