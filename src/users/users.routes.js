(function() {
    'use strict';

    angular.module("myUsers")
    .config(function($stateProvider, $urlRouterProvider) {
        
        $stateProvider
            .state('users', {
                url: "/users",
                template: "helloooooooo",
            });
    });



})();
