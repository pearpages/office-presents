// TODO (pearpages) think of cases like February 29th
(function() {
    'use strict';

    angular.module("myUsers")
    .factory('Bday',[bday]);

    /**
     *
     * @returns {Bday}
     */
    function bday() {

        var Bday = function (month,day) {
            // TODO (pearpages) Make sure the day matches the month
            if(typeof month !== 'number'){
                throw new Error('Number expected in variable month in myUsers::Bday constructor');
            }
            if(typeof day !== 'number'){
                throw new Error('Number expected in variable day in myUsers::Bday constructor');
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
                // TODO (pearpages) test with mockup dates for dates before and after the current system date
                return candidate2;
            }
        };

        return Bday;
    }

})();




        