(function() {
    'use strict';

    angular.module("office-presents")
        .factory('birthdays', ['Birthday', birthdays]);

    function birthdays(Birthday) {

        var birthdays = [];

        init();

        return {
            getBirthdays: getBirthdays
        };

        function init() {
            if(birthdays.length === 0){
                mockBirthdays();
            }
        }

        function getBirthdays() {
            return birthdays;
        }

        function mockBirthdays() {
            var names = ['Celia   Myers',
                'Clayton Fuller',
                'Claire  Holt',
                'Valerie Henderson',
                'Lorena  Dennis',
                'Priscilla   Zimmerman',
                'Olive   Jackson',
                'Sidney  Cobb',
                'Anita   Caldwell',
                'Jessie  Spencer'
            ];

            for (var i = 0; i < names.length; i++) {
                birthdays.push(new Birthday(names[i]));
            }
        }
    }
})();
