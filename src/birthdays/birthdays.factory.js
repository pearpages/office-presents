(function() {
    'use strict';

    angular.module("myBdays")
        .factory('birthdays', ['Birthday',birthdays]);

    function birthdays(Birthday) {

        var birthdays = [];

        return {
            getAll: getAll,
            make: make,
            get: get
        };

        function make(user,bdayDate,envelope) {
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
