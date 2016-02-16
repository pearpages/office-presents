(function() {
    'use strict';

    angular.module("office-presents")
    .config(function($stateProvider, $urlRouterProvider) {
        
        $urlRouterProvider.otherwise("/");
        
        $stateProvider
            .state('home', {
                url: "/",
                templateUrl: "src/home/templates/home.html",
                controller: "HomeController",
                controllerAs: "vm"
            });
    });



})();
