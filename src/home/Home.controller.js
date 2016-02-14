(function() {
    'use strict';

    angular.module("office-presents")
    .controller('HomeController',['birthdays','NgTableParams',HomeController]);

    function HomeController(birthdays,NgTableParams) {

        var vm = this;

        vm.table = new NgTableParams({page:1,count: birthdays.getObjects().length},{data: birthdays.getObjects()});;

    }

})();