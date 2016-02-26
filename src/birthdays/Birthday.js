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
            if(user instanceof User === false) {
                throw new Error('User expected in Birthday constructor');
            }
            if(date instanceof Date === false) {
                throw new Error('Date expected in Birthday constructor');
            }
            if(envelope instanceof Envelope === false) {
                throw new Error('Envelope expected in Birthday constructor');
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
