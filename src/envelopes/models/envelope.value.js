(function() {
    'use strict';

    /**
     * 
     * @param {String} what
     * @param {User} who   
     * @param {Date} lastDay
     * @param {Date} eventDate
     * @param {String} where
     */
    var Envelope = function (what,who,lastDay,eventDate,where) {
        this._id = ++this.nextId.id;
        this.what = what;
        this.who = who; // User Object
        this.eventDate = eventDate;
        this.lastDay = lastDay;
        this.where = where;
        this.responsible = null; // User Object
        this.contributors = []; // Array of User
    };

    Envelope.prototype.nextId = {id: 0};

    /**
     * 
     * @param  {User}  contributor
     * @return {Boolean}          
     */
    Envelope.prototype.hasContributor = function (contributor) {
        return this.contributors.indexOf(contributor) === -1 ? false : true;
    };

    angular.module("myEnvelopes")
    .value('Envelope',Envelope);

})();