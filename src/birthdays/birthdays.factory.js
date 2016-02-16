(function() {
    'use strict';

    angular.module("office-presents")
        .factory('birthdays', ['Birthday','users', 'envelopes',birthdays]);

    function birthdays(Birthday,users,envelopes) {

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
                var bdayDate = mockDate();
                var envelope = envelopes.make('Birthday',u[i],new Date(bdayDate + (14*3600*24)),'Some desk');
                var hasResponsible = Math.ceil(Math.random() * 4)  === 4 ? true : false;
                if(hasResponsible) {
                    envelope.responsible = users.getOneRandom(u[i]);
                }
                birthdays.push(new Birthday(u[i],bdayDate,envelope));
            }
        }

        function mockDate() {
            var month = Math.ceil(Math.random() * 12);
            var day = Math.ceil(Math.random() * 31);
            return new Date(new Date().getFullYear(), month, day);
        }
    }
})();
