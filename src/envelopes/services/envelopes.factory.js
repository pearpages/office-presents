(function() {
    'use strict';

    angular.module("myEnvelopes")
    .factory('envelopes',['User','Envelope','addResponsible','removeResponsible','addContribution','removeContribution',envelopes]);

    function envelopes(User,Envelope,addResponsible,removeResponsible,addContribution,removeContribution) {

        var envelopes = [];

        return {
            getAssignedEnvelopes: getAssignedEnvelopes,
            getEnvelope: getEnvelope,
            make: make
        };

        /**
         * Get all open envelopes, but we can exlude one user
         * @param  {User} but
         * @return {[Envelope]}
         */
        function getAssignedEnvelopes (but) {
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

        /**
         * 
         * @param  {String} what    
         * @param  {User} who       
         * @param  {Date} lastDay   
         * @param  {Date} eventDate 
         * @param  {String} where     
         * @return {Envelope}         
         */
        function make(what,who,lastDay,eventDate,where) {
            if(typeof what !== 'string') {
                throw 'Expected string for variable what in envelopes.make';
            }
            if(who instanceof User === false) {
                throw 'Expected User for variable who in envelopes.make';
            }
            if(lastDay instanceof Date === false) {
                throw 'Expected Date in variable lastDay in envelopes.make';
            }
            if(eventDate instanceof Date === false) {
                throw 'Exepcted Date in variable eventDate in envelopes.make';
            }
            if(typeof where !== 'string') {
                throw 'Expected string in variable where in envelopes.make';
            }
            Envelope.prototype.addResponsible = addResponsible;
            Envelope.prototype.removeResponsible = removeResponsible;
            Envelope.prototype.addContribution = addContribution;
            Envelope.prototype.removeContribution = removeContribution;
            var envelope = new Envelope(what,who,lastDay,eventDate,where);
            envelopes.push(envelope);
            return envelope;
        }
    }
})();