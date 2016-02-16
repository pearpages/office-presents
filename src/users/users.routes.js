(function() {
    'use strict';

    angular.module("myUsers")
    .config(function($stateProvider, $urlRouterProvider) {
        
        $stateProvider
            .state('users', {
                url: "/users",
                template: "helloooooooo"
            })
            .state('show-as', {
                url: "/users/show-as",
                templateUrl: "src/users/showAs/partials/show-as.html",
                controller: "ShowAsController",
                controllerAs: "vm"
            })
            .state('user', {
                url: "/users/user/:id",
                templateUrl: "src/users/user/partials/user.html",
                controller: "UserController",
                controllerAs: "vm"
            });
    });



})();
