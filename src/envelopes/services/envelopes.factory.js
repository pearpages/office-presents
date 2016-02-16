(function() {
    'use strict';

    angular.module("myEnvelopes")
    .factory('envelopes',['Envelope',envelopes]);

    function envelopes(Envelope) {

        var envelopes = [];

        return {
            getOpenEnvelopes: getOpenEnvelopes,
            getEnvelope: getEnvelope,
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

        /**
         * 
         * @param  {String} id
         * @return {Envelope}
         */
        function getEnvelope(id) {
            for (var i = envelopes.length - 1; i >= 0; i--) {
                if(envelopes[i]._id == id) {
                    return envelopes[i];
                }
            }
            return null;
        }

        function make(what,who,lastDay,where) {
            var envelope = new Envelope(what,who,lastDay,where);
            envelopes.push(envelope);
            return envelope;
        }
    }
})();