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

        activate();

        function activate() {
        	vm.user = currentUser.getUser();	
        	vm.birthdays = new NgTableParams({page:1,count: birthdays.getObjects().length},{data: birthdays.getObjects()});
        	vm.envelopes = new NgTableParams({page:1,count: envelopes.getOpenEnvelopes().length},{data: envelopes.getOpenEnvelopes()});
        } 

        function addContributor(envelope,user) {
        	envelope.addContributor(user);
        }

        function removeContributor(envelope,user) {
        	envelope.removeContributor(user);
        }
        
    }

})();