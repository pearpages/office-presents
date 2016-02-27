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
            if(typeof what !== 'string'){
                throw "String expected in variable what in Envelope constructor";
            }
            if(who instanceof User === false){
                throw "User expected in Envelope constructor";
            }
            if(lastDay instanceof Date === false) {
                throw "Date expected in parameter lastDay in Envelope constructor";
            }
            if(eventDate instanceof Date === false) {
                throw "Date expected in parameter eventDAte in Envelope constructor";
            }
            if(typeof where !== 'string'){
                throw "String expected in variable where in Envelope constructor";
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
            if(contributor instanceof User === false) {
                throw 'User exepcted in contributor variable in Envelope::hasContributor';
            }
            return this.contributors.indexOf(contributor) !== -1 ;
        };

        return Envelope;
    }

})();