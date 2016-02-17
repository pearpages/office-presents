(function() {
    'use strict';

    angular.module("myUsers")
    .controller('UserController',['users','$state','currentUser',UserController]);

    function UserController(users,$state,currentUser) {

        var vm = this;

        vm.user;
        vm.logged;
        vm.save = save;
        vm.inputPresents;

        activate();

        function activate() {
            vm.user = users.getUser($state.params.id);
            vm.logged = currentUser.get();
            vm.inputPresents = currentUser.get().presents;
        }

        function save() {
            currentUser.get().presents = vm.inputPresents;
        }

    }
})();