(function() {
    'use strict';

    angular.module("office-presents")
    .factory('envelopes',['Envelope',envelopes]);

    function envelopes(Envelope) {

        var envelopes = [];

        return {
            getOpenEnvelopes: getOpenEnvelopes,
            make: make
        };

        function getOpenEnvelopes () {
            var result = [];
            for (var i = envelopes.length - 1; i >= 0; i--) {
                if(envelopes[i].responsible !== null) {
                    result.push(envelopes[i]);
                }
            }
            return result;
        }

        function make(what,who,lastDay,where) {
            var envelope = new Envelope(what,who,lastDay,where);
            envelopes.push(envelope);
            return envelope;
        }
    }
})();