(function() {
	'use strict';

    /**
     * 
     * @param {String} id
     * @param {String} name
     * @param {Bday} bday
     */
	var User = function(id,name,bday) {
		this.id = id;
		this.name = name;
        this.bday = bday;
        this.bdays = []; // Array of Birthday
        this.responsible = []; // Array of Envelope
	};

    User.prototype.getCurrentBday = function () {
        var month = this.bday.month;
        var day = this.bday.day;

        var now = new Date();
        var candidate1 = new Date(new Date().getFullYear(), month, day);
        var candidate2 = new Date(new Date().getFullYear()+1, month, day);

        if (now <= candidate1) {
            return candidate1;
        } else {
            return candidate2;
        }
    };

	angular.module("myUsers")
	.value('User',User);

})();