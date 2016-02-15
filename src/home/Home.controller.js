(function() {
    'use strict';

    angular.module("office-presents")
    .controller('HomeController',['birthdays','envelopes','NgTableParams',HomeController]);

    function HomeController(birthdays,envelopes,NgTableParams) {

        var vm = this;

        vm.birthdays = new NgTableParams({page:1,count: birthdays.getObjects().length},{data: birthdays.getObjects()});;

        vm.envelopes = envelopes.getOpenEnvelopes();
    }

})();