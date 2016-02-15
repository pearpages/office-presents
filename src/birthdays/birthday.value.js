(function() {
    'use strict';

    var Birthday = function(user) {
        var month = Math.ceil(Math.random() * 12);
        var day = Math.ceil(Math.random() * 31);
        this.date = new Date(new Date().getFullYear(), month, day);
        var envelope = Math.ceil(Math.random() * 4)  === 4 ? true : false;
        this.envelope = envelope === true ? 'YES' : 'NO';
        this.user = user;

    };

    angular.module("office-presents")
        .value('Birthday', Birthday);

})();
