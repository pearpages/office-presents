(function() {
    'use strict';

    angular.module("myEnvelopes")
    .config(function($stateProvider, $urlRouterProvider) {
        
        $stateProvider
            .state('envelope', {
                url: "/envelopes/envelope/:id",
                templateUrl: "src/envelopes/envelope/partials/one-envelope.html",
                controller: "EnvelopeController",
                controllerAs: "vm"
            });
    });

})();
