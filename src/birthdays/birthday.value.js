(function() {
    'use strict';

    var Birthday = function(completeName) {
        this.month = Math.ceil(Math.random() * 12);
        this.day = Math.ceil(Math.random() * 31);
        this.hasEnvelope = Math.ceil(Math.random() * 2)  === 2 ? true : false;
        this.completeName = completeName;
    };

    Birthday.prototype.getDate = function () {
        return new Date(new Date().getFullYear(), this.month, this.day);
    };

    Birthday.prototype.toObject = function () {
        var name = this.completeName;
        var date = this.getDate();
        var envelope = this.hasEnvelope === true ? 'glyphicon glyphicon-envelope' : '';
        return {completeName: name, date: date, envelope: envelope};
    };

    angular.module("office-presents")
        .value('Birthday', Birthday);

})();
