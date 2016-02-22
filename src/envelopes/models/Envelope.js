(function() {
    'use strict';

    angular.module("myEnvelopes")
    .factory('Envelope',['User',envelope]);

    function envelope(User) {

        /**
         * 
         * @param {String} what
         * @param {User} who   
         * @param {Date} lastDay
         * @param {Date} eventDate
         * @param {String} where
         */
        var Envelope = function (what,who,lastDay,eventDate,where) {
            if(arguments.length != 5) {
                throw "Missing arguments in Envelope constructor";
            }
            if(who instanceof User === false){
                throw "User expected in Envelope constructor";
            }

            this._id = ++this.nextId.id;
            this.what = what;
            this.who = who; // User Object
            this.eventDate = eventDate;
            this.lastDay = lastDay;
            this.where = where;
            this.responsible = null; // User Object
            this.contributors = []; // Array of User
        };

        Envelope.prototype.nextId = {id: 0};

        /**
         * 
         * @param  {User}  contributor
         * @return {Boolean}          
         */
        Envelope.prototype.hasContributor = function (contributor) {
            return this.contributors.indexOf(contributor) === -1 ? false : true;
        };

        return Envelope;
    }

})();