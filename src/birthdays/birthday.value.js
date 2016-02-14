(function() {
    'use strict';

    var Birthday = function(completeName) {
        this.month = Math.ceil(Math.random() * 12);
        this.day = Math.ceil(Math.random() * 31);
        this.completeName = completeName;
    };

    Birthday.prototype.getDate = function () {
        return new Date(new Date().getFullYear(), this.month, this.day);
    };

    angular.module("office-presents")
        .value('Birthday', Birthday);

})();
