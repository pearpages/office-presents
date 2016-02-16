(function() {
    'use strict';

    angular.module("myUsers")
    .controller('UserController',['users','$state',UserController]);

    function UserController(users,$state) {

        var vm = this;

        vm.user;

        activate();

        function activate() {
            vm.user = users.getUser($state.params.id);
        }

    }
})();