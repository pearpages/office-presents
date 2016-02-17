(function() {
	'use strict';

	angular.module("myEnvelopes")
	.controller('EnvelopeController',['$state','envelopes','currentUser','users',EnvelopeController]);

	function EnvelopeController($state,envelopes,currentUser,users) {

		var vm = this;

		vm.envelope;
		vm.responsible;
		vm.show = show;
		vm.contribute = contribute;
		vm.removeContibution = removeContibution;
		vm.users = users;
		vm.assign = assign;

		activate();

		function activate() {
			vm.envelope = envelopes.getEnvelope($state.params.id);
			if(vm.envelope.responsible) {
				vm.responsible = vm.envelope.responsible.id;
			}
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

		function assign() {
			var assigned = users.getUser(vm.responsible);
			vm.envelope.responsible = assigned;
			assigned.responsible.push(vm.envelope);
		}
	}
})();