(function() {
	'use strict';

	angular.module("myEnvelopes")
	.controller('EnvelopeController',['$state','envelopes','currentUser','users',EnvelopeController]);

	function EnvelopeController($state,envelopes,currentUser,users) {

		var vm = this;

		vm.envelope;
		vm.responsible;
		vm.default;
		vm.show = show;
		vm.contribute = contribute;
		vm.removeContibution = removeContibution;
		vm.users = users;
		vm.remove = remove;
		vm.assign = assign;
		vm.showAssign = showAssign;

		activate();

		function activate() {
			vm.envelope = envelopes.getEnvelope($state.params.id);
			if(vm.envelope.responsible.id !== undefined) {
				vm.responsible = vm.envelope.responsible.id;
			}
			vm.default = currentUser.get().id;
		}

		function showAssign() {
			if(currentUser.get().role === 'ADMIN') {
				return 'ADMIN';
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

		function remove() {
			var assigned = users.getUser(vm.responsible);
			assigned.removeEnvelope(vm.envelope);
			vm.envelope.responsible = undefined;
		}
	}
})();