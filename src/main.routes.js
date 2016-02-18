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
            })
            .state('loggout', {
                url: "/loggout",
                controller: function (currentUser,$state) {
                    currentUser.loggout();
                    $state.go('home');
                }
            });
    });



})();
