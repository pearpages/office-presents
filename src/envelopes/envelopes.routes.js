(function() {
    'use strict';

    angular.module("myEnvelopes")
    .config(function($stateProvider, $urlRouterProvider) {
        
        $stateProvider
            .state('envelopes', {
                url: "/envelopes",
                abstract:true,
                template: '<div ui-view></div>'
            })
            .state('envelopes.list', {
                url: "/list",
                template: "<open-envelopes></open-envelopes>",
            })
            .state('envelopes.envelope', {
                url: "/envelope/:id",
                templateUrl: "src/envelopes/envelope/partials/one-envelope.html",
                controller: "EnvelopeController",
                controllerAs: "vm"
            })
            .state('envelopes.create', {
                url: "/new",
                templateUrl: "src/envelopes/create/partials/new-envelope.html",
                controller: "CreateEnvelopeController",
                controllerAs: "vm"
            });
    });

})();
