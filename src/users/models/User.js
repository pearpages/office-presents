(function() {
	'use strict';

    angular.module("myUsers")
    .factory('User',['Bday',user]);

    function user(Bday) {
        /**
         * 
         * @param {String} id
         * @param {String} name
         * @param {Bday} bday
         */
        var User = function(id,name,bday) {
            if(typeof id !== 'string') {
                throw 'String expected in variable id in User model constructor';
            }
            if(typeof name !== 'string') {
                throw 'String expected in variable name in User model constructor';
            }
            if(bday instanceof Bday === false) {
                throw 'Bday expected in variable bday in User model constructor';
            }
            this.id = id;
            this.name = name;
            this.bday = bday;
            this.bdays = []; // Array of Birthday
            this.responsible = []; // Array of Envelope
            this.role = 'NORMAL'; // String
            this.presents = true;
            this.contributions = []; // Array of Envelopes
        };

        /**
         * 
         * @param  {Envelope} envelope 
         * @return {Envelope}          
         */
        User.prototype.removeEnvelope = function (envelope) {
            var i = this.responsible.indexOf(envelope);

            if( i !== -1) {
                this.responsible.splice(i,1);
            }
            return envelope;
        };

        User.prototype.getCurrentBday = function () {
            return this.bday.getCurrentBday();
        };

        return User;
    }

})();