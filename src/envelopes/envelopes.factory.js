(function() {
    'use strict';

    angular.module("office-presents")
    .factory('envelopes',['birthdays','Envelope',envelopes]);

    function envelopes(birthdays,Envelope) {

        var envelopes = [];

        return {
            getOpenEnvelopes: getOpenEnvelopes
        };

        function getOpenEnvelopes () {
            if(birthdays.getObjects() && envelopes.length === 0 ) {
                var bdays = birthdays.getObjects();

                for (var i = 0; i < bdays.length; i++) {
                    var bday = bdays[i];
                    if(bday.envelope !== ''){
                        envelopes.push(new Envelope('Birthday',bday.completeName,new Date(bday.date + (14*3600*24)),'Some random desk'));    
                    }
                }

                return envelopes;
            } else {
                return envelopes;
            }
        }
    }
})();