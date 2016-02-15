(function() {
    'use strict';

    var Envelope = function (what,who,lastDay,where) {
        this._id = ++this.nextId.id;
        this.what = what;
        console.log(who);
        this.who = who;
        this.lastDay = lastDay;
        this.where = where;
        this.contributors = [];
    };

    Envelope.prototype.nextId = {id: 0};

    Envelope.prototype.hasContributor = function (contributor) {
        return this.contributors.indexOf(contributor) === -1 ? false : true;
    };

    Envelope.prototype.addContributor = function (contributor) {
        this.contributors.push(contributor);
    };

    Envelope.prototype.removeContributor = function (contributor) {
        var i = this.contributors.indexOf(contributor);
        if(i !== -1){
            this.contributors.splice(i,1);
        }
    }

    angular.module("office-presents")
    .value('Envelope',Envelope);

})();