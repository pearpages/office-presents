(function() {
    'use strict';

    angular.module("office-presents")
        .factory('birthdays', ['Birthday','users', birthdays]);

    function birthdays(Birthday,users) {

        var birthdays = [];

        init();

        return {
            getAll: getAll
        };

        function init() {
            if (birthdays.length === 0) {
                mockBirthdays();
            }
        }

        function getAll() {
            return birthdays;
        }

        function mockBirthdays() {
            var u = users.getAll();

            for (var i = 0; i < u.length; i++) {
                birthdays.push(new Birthday(u[i]));
            }
        }
    }
})();
