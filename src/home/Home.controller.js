(function() {
    'use strict';

    angular.module("office-presents")
    .controller('HomeController',['envelopes','NgTableParams','currentUser',HomeController]);

    function HomeController(envelopes,NgTableParams,currentUser) {

        var vm = this;

        vm.envelopes;
        vm.user;        
        vm.addContributor = addContributor;
        vm.removeContributor = removeContributor;

        activate();

        function activate() {
        	vm.user = currentUser;	
        	vm.envelopes = new NgTableParams({page:1,count: envelopes.getOpenEnvelopes(vm.user.get()).length},{data: envelopes.getOpenEnvelopes(vm.user.get())});
        } 

        function addContributor(envelope,user) {
        	envelope.addContributor(currentUser.get());
        }

        function removeContributor(envelope,user) {
        	envelope.removeContributor(currentUser.get());
        }
        
    }

})();