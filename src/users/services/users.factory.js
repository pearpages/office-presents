(function() {
    'use strict';

    angular.module("myUsers")
        .factory('users', ['User', 'addResponsible','removeResponsible','addContribution','removeContribution', users]);

    function users(User, addResponsible,removeResponsible,addContribution,removeContribution) {

        var users = [];

        return {
            getAll: getAll,
            getOneRandom: getOneRandom,
            getUser: getUser,
            make: make
        };

        function make(id,name,bday) {
            User.prototype.addResponsible = addResponsible;
            User.prototype.removeResponsible = removeResponsible;
            User.prototype.addContribution = addContribution;
            User.prototype.removeContribution = removeContribution;
            var user = new User(id, name, bday);
            users.push(user);
            return user;
        }

        function getAll() {
            return users.sort(compare);
        }

        function compare(a, b) {
            if (a.name < b.name)
                return -1;
            else if (a.name > b.name)
                return 1;
            else
                return 0;
        }

        /**
         * Get one random user form the list
         * @param  {User} not User that we do not want
         * @return {User}
         */
        function getOneRandom(not) {
            if (not === undefined) {
                var randomValue = Math.floor(Math.random() * users.length);
                return users[randomValue];
            } else {
                var result = not;
                while (result === not) {
                    result = users[Math.floor(Math.random() * users.length)];
                }
                return result;
            }
        }

        /**
         * Get a user by its id
         * @param  {String} userid
         * @return {User} or {null}
         */
        function getUser(userid) {
            for (var i = users.length - 1; i >= 0; i--) {
                if (users[i].id === userid) {
                    return users[i];
                }
            }
            return null;
        }

    }
})();
