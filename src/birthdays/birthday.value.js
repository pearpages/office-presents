(function() {
    'use strict';

    var Birthday = function(user,date,envelope) {
        this.date = date;
        this.envelope = envelope;
        this.user = user;
        this._id = ++this.nextId.id;
    };

    Birthday.prototype.nextId = {id: 0};

    angular.module("office-presents")
        .value('Birthday', Birthday);

})();
