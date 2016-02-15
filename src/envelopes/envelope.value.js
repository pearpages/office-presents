(function() {
    'use strict';

    var Envelope = function (what,who,lastDay,where) {
        this._id = ++this.nextId.id;
        this.what = what;
        this.who = who;
        this.lastDay = lastDay;
        this.where = where;
        this.contributors = [];
    };

    Envelope.prototype.nextId = {id: 0};

    Envelope.prototype.hasContributor = function (contributor) {
        return this.contributors.indexof(contributor) === -1 ? false : true;
    };

    angular.module("office-presents")
    .value('Envelope',Envelope);

})();