(function() {
	'use strict';

	angular.module("myEnvelopes")
	.controller('CreateEnvelopeController',['notifications','currentUser','envelopes','users',CreateEnvelopeController]);

	function CreateEnvelopeController(notifications,currentUser,envelopes,users) {

		var vm = this;

		vm.form;
		vm.submit = submit;
		vm.currentUser = currentUser;

		activate();

		function activate() {
			vm.form = new Form();
		}

		function submit() {
			makeEnvelope();
			notifications.add('Envelope added','success');
			vm.form = new Form();
		}

		function makeEnvelope() {
			var who = users.getUser(vm.form.who);
			var responsible = users.getUser(vm.form.responsible);

			var envelope = envelopes.make(vm.form.what,who,vm.form.lastDay,vm.form.when,vm.form.where);
			responsible.addResponsible(responsible,envelope);
		}

		function Form() {
			this.what;
			this.who;
			this.when;
			this.lastDay;
			this.where;
			this.responsible;	
		}
	}
})();