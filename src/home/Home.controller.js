(function() {
    'use strict';

    angular.module("office-presents")
    .controller('HomeController',['birthdays','envelopes','NgTableParams','currentUser',HomeController]);

    function HomeController(birthdays,envelopes,NgTableParams,currentUser) {

        var vm = this;

        vm.birthdays;
        vm.envelopes;
        vm.user;        
        vm.addContributor = addContributor;
        vm.removeContributor = removeContributor;
        vm.hasEnvelope = hasEnvelope;

        activate();

        function activate() {
        	vm.user = currentUser;	

        	vm.birthdays = new NgTableParams({page:1,count: birthdays.getAll().length},{data: birthdays.getAll()});
        	vm.envelopes = new NgTableParams({page:1,count: envelopes.getOpenEnvelopes(vm.user.get()).length},{data: envelopes.getOpenEnvelopes(vm.user.get())});
        } 

        function addContributor(envelope,user) {
        	envelope.addContributor(currentUser.get());
        }

        function removeContributor(envelope,user) {
        	envelope.removeContributor(currentUser.get());
        }
        
        function hasEnvelope(envelope) {
            if(envelope.responsible === null) {
                return 'NO';
            } else {
                return 'YES';
            }
        }
    }

})();