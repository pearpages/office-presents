(function() {
    'use strict';

    var Birthday = function(user,date,envelope) {
        this.date = date;
        this.envelope = envelope;
        this.user = user;
    };

    angular.module("office-presents")
        .value('Birthday', Birthday);

})();
