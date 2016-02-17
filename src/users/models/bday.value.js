(function() {
    'use strict';

    angular.module("myUsers")
    .value('Bday',function (month,day) {
        this.month = month;
        this.day = day;
    });

})();