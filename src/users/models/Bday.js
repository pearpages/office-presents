(function() {
    'use strict';

    angular.module("myUsers")
    .factory('Bday',[bday]);

    function bday() {

        var Bday = function (month,day) {
            if(typeof month !== 'number'){
                throw 'Number expected in variable month in myUsers::Bday constructor';
            }
            if(typeof day !== 'number'){
                throw 'Number expected in variable day in myUsers::Bday constructor';
            }
            this.month = month;
            this.day = day;
        };
    	
        Bday.prototype.getCurrentBday = function () {
            var month = this.month;
            var day = this.day;

            var now = new Date();
            var candidate1 = new Date(new Date().getFullYear(), month, day);
            var candidate2 = new Date(new Date().getFullYear()+1, month, day);

            if (now <= candidate1) {
                return candidate1;
            } else {
                return candidate2;
            }
        };

        return Bday;
    }

})();




        