(function() {
	'use strict';

	angular.module("common")
	.factory('mockData',['birthdays', 'envelopes', 'Bday', 'users',mockData]);

	function mockData(birthdays,envelopes,Bday,users) {
		return {
			mock: mock
		};

		function mockDate() {
            var month = Math.ceil(Math.random() * 12);
            var day = Math.ceil(Math.random() * 31);
            return new Bday(month, day);
        }

        function mockEnvelope(user, bdayDate) {
            var lastDay = new Date(bdayDate.getTime() + (14 * 3600 * 24 * 1000));

            var envelope = envelopes.make('Birthday', user, lastDay, bdayDate, 'Some desk');
            var hasResponsible = Math.ceil(Math.random() * 4) === 4 ? true : false;
            if (hasResponsible) {
                var responsible = users.getOneRandom(user);
                user.addResponsible(user,envelope);
            }
            return envelope;
        }

        function mock(howMany) {

            var names = getNames();

            howMany = howMany || names.length;

            for (var i = howMany - 1; i >= 0; i--) {
                var id = names[i].replace(/\s/g, '');
                var bdayDate = mockDate();
                var user = users.make(id, names[i], bdayDate);
                var envelope = mockEnvelope(user, user.getCurrentBday());
                user.bdays.push(birthdays.make(user, user.getCurrentBday(), envelope));
            }
        }

        function getNames() {

        	return [
                'Pere Pages',
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
        }
	}
})();