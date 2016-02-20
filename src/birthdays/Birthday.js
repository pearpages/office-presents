(function() {
    'use strict';

    angular.module("myBdays")
        .factory('Birthday', ['User','Envelope',birthday]);

    function birthday(User,Envelope) {

        /**
         * 
         * @param {User} user     
         * @param {Date} date    
         * @param {Envelope} envelope
         */
        var Birthday = function(user, date, envelope) {
            if(date instanceof Date === false) {
                throw 'Date expected';
            }
            if(user instanceof User === false) {
                throw 'User expected';
            }
            if(envelope instanceof Envelope === false) {
                throw 'Envelope expected';
            }
            this.date = date;
            this.envelope = envelope;
            this.user = user;
            this._id = ++this.nextId.id;
        };

        Birthday.prototype.nextId = { id: 0 };

        return Birthday;
    }

})();
