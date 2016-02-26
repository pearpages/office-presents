(function() {
    'use strict';

    angular.module("myBdays")
        .factory('birthdays', ['Birthday','User','Envelope',birthdays]);

    function birthdays(Birthday,User,Envelope) {

        var birthdays = [];

        return {
            getAll: getAll,
            make: make,
            get: get
        };

        /**
         * 
         * @param  {User} user   
         * @param  {Date} bdayDate 
         * @param  {Envelope} envelope 
         * @return {Birthday}          
         */
        function make(user,bdayDate,envelope) {
            if(user instanceof User === false) {
                throw new Error('User expected');
            }
            if(bdayDate instanceof Date === false) {
                throw new Error('Date expected');
            }
            if(envelope instanceof Envelope === false){
                throw new Error('Envelope expected');
            }
            var bday = new Birthday(user,bdayDate,envelope);
            birthdays.push(bday);
            return bday;
        }

        function get(id) {
            for (var i = 0; i < birthdays.length; i++) {
                if(birthdays[i]._id == id) {
                    return birthdays[i];
                }
            }
            return null;
        }

        function getAll() {
            return birthdays;
        }

    }
})();
