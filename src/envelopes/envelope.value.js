(function() {
    'use strict';

    var Envelope = function (what,who,lastDay,where) {
        this.what = what;
        this.who = who;
        this.lastDay = lastDay;
        this.where = where;
        this.contributors = [];
    };

    Envelope.prototype.hasContributor = function (contributor) {
        return this.contributors.indexof(contributor) === -1 ? false : true;
    };

    angular.module("office-presents")
    .value('Envelope',Envelope);

})();