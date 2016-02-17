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

        /**
         * Get all open envelopes, but we can exlude one user
         * @param  {User} but
         * @return {[Envelope]}
         */
        function getOpenEnvelopes (but) {
            var result = [];
            if(but === undefined) {
                for (var i = envelopes.length - 1; i >= 0; i--) {
                    if(envelopes[i].responsible !== null) {
                        result.push(envelopes[i]);
                    }
                }    
            } else {
                for (var j = envelopes.length - 1; j >= 0; j--) {
                    if(envelopes[j].responsible !== null) {
                        if(envelopes[j].who !== but) {
                            result.push(envelopes[j]);
                        }
                    }
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

        function make(what,who,lastDay,eventDate,where) {
            var envelope = new Envelope(what,who,lastDay,eventDate,where);
            envelopes.push(envelope);
            return envelope;
        }
    }
})();