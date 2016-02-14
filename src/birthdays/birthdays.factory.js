(function() {
    'use strict';

    angular.module("office-presents")
        .factory('birthdays', ['Birthday', birthdays]);

    function birthdays(Birthday) {

        var birthdays = [];

        init();

        return {
            getBirthdays: getBirthdays,
            getObjects: getObjects
        };

        function init() {
            if (birthdays.length === 0) {
                mockBirthdays();
            }
        }

        function getBirthdays() {
            return birthdays;
        }

        function getObjects() {
            var results = [];
            for (var i = 0; i < birthdays.length; i++) {
                results.push(birthdays[i].toObject());
            }

            return results;
        }

        function mockBirthdays() {
            var names = [
                'Lamar  Underwood',
                'Anne    Parsons',
                'Curtis  Pope',
                'Terence Young',
                'Ivan    Green',
                'Claire  Terry',
                'Clifford    Townsend',
                'Terrell Franklin',
                'Stella  Waters',
                'Kevin   Grant',
                'Billie  Bowman',
                'Tamara  Oliver',
                'Irvin   Wagner',
                'Guadalupe   Roy',
                'Traci   Barton',
                'Jake    Benson',
                'Terrance    Wade',
                'Ernesto Larson',
                'Edward  Higgins',
                'Ellis   Rodriquez',
                'Robyn   Garza',
                'Colleen Reynolds',
                'Byron   Rivera',
                'Mindy   Howell',
                'Tracy   Lambert',
                'Andrea  Carlson',
                'Willis  Mcbride',
                'Gladys  Becker',
                'Leroy   Stephens',
                'Franklin    Olson',
                'Ramon   Brown',
                'Brittany    Delgado',
                'Willie  Paul',
                'Brendan Tucker',
                'Ray Carroll',
                'Marco   Crawford',
                'Mable   Love',
                'Luther  Byrd',
                'Maurice Gutierrez',
                'Stacy   Barnes',
                'Emmett  Hanson',
                'Bertha  Swanson',
                'Jimmie  Harmon',
                'Mathew  Sanchez',
                'Kelly   Hogan',
                'Bill    Harrington',
                'Jane    Jacobs',
                'Antonio Harper',
                'Tina    Allen',
                'Mildred Mason',
                'Wilbur  Schmidt',
                'Georgia Parker',
                'Elsa    Baker',
                'Kelvin  Holt',
                'Betty   Holloway',
                'Clark   Frazier',
                'Lois    Erickson',
                'Gene    Bates',
                'Suzanne Fox',
                'Freddie Williams',
                'Terry   Hughes',
                'Meredith    Miller',
                'Benny   Cummings',
                'Genevieve   Vaughn',
                'Edgar   Armstrong',
                'Marshall    Spencer',
                'Dallas  Owen',
                'Russell Nelson',
                'Nick    Carr',
                'Wilbert Smith',
                'Rodney  Peters',
                'Adam    Wilkerson',
                'Beulah  Harris',
                'Janie   Figueroa',
                'Donnie  Park',
                'Pat Chavez',
                'Cynthia Washington',
                'Gabriel Schneider',
                'Phyllis Stokes',
                'Sherman Barnett',
                'Tyler   Wolfe',
                'Ramiro  Daniels',
                'Rachel  Owens',
                'Trevor  Goodwin',
                'Daniel  Duncan',
                'Neil    Gross',
                'Ron Rogers',
                'Lee Reid',
                'Ben Roberson',
                'Marcus  Garrett',
                'Courtney    Doyle',
                'Tabitha Johnston',
                'Garry   Buchanan',
                'Brett   Adkins',
                'Ross    Gonzales',
                'Jasmine Dawson',
                'Monique Rhodes',
                'Howard  Malone',
                'Brad    Greene',
                'Lynette Montgomery'
            ];

            for (var i = 0; i < names.length; i++) {
                birthdays.push(new Birthday(names[i]));
            }
        }
    }
})();
