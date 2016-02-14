(function() {
    'use strict';

    angular.module("office-presents")
    .controller('HomeController',['birthdays',HomeController]);

    function HomeController(birthdays) {

        var vm = this;

        vm.birthdays = birthdays.getBirthdays();
    }

})();