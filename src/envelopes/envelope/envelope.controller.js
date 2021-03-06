(function() {
	'use strict';

	angular.module("myEnvelopes")
	.controller('EnvelopeController',['$state','envelopes','currentUser','users',EnvelopeController]);

	function EnvelopeController($state,envelopes,currentUser,users) {

		var vm = this;

		vm.envelope;
		vm.currentUser;
		vm.adminDefault;
		vm.responsible;
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
			if(vm.envelope.responsible !== undefined && vm.envelope.responsible !== null) {
				vm.responsible = vm.envelope.responsible.id;
				vm.adminDefault = vm.envelope.responsible.id;
			} else {
				vm.adminDefault = currentUser.getUser().id;
				vm.responsible = currentUser.getUser().id;
			}
			vm.currentUser = currentUser;
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
			vm.envelope.addContribution(currentUser.get(),vm.envelope);
		}

		function removeContibution() {
			vm.envelope.removeContribution(currentUser.get(),vm.envelope);
		}

		function assign() {
			var assigned;
			if(currentUser.get().role === 'ADMIN') {
				assigned = users.getUser(vm.responsible);
			} else {
				assigned = currentUser.get();
			}
			assigned.addResponsible(assigned,vm.envelope);
		}

		function remove() {
			var assigned;
			if(currentUser.get().role === 'ADMIN') {
				assigned = users.getUser(vm.responsible);
			} else {
				assigned = currentUser.get();
			}
			assigned.removeResponsible(assigned,vm.envelope);
		}
	}
})();