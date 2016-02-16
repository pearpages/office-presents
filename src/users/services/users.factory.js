(function() {
	'use strict';

	angular.module("myUsers")
	.factory('users',['User',users]);

	function users(User) {

		var users = [];

		init();

		return {
			getAll: getAll,
            getOneRandom: getOneRandom,
            getUser: getUser
		};

		function getAll() {
			return users;
		}

        /**
         * Get one random user form the list
         * @param  {User} not User that we do not want
         * @return {User}
         */
        function getOneRandom (not) {
            if(not !== undefined) {
                var randomValue = Math.floor(Math.random() * users.length);
                return users[randomValue];
            } else {
                var result = not;
                while(result === not) {
                    var randomValue = Math.floor(Math.random() * users.length);
                    result[randomValue];
                }
                return result;
            }
        }

        /**
         * Get a user by its id
         * @param  {String} userid
         * @return {User}
         */
        function getUser(userid) {
            for (var i = users.length - 1; i >= 0; i--) {
                if(users[i].id === userid){
                    return users[i];
                } 
            }
            return null;
        }

		function init() {
			if(users.length === 0) {
				mock();
			}
		}

		function mock() {

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

            for (var i = names.length - 1; i >= 0; i--) {
           		users.push(new User(names[i].replace(/\s/g, ''),names[i]));
            }
		}
	}
})();