(function() {
    'use strict';

    angular.module("myUsers")
    .value('Bday',function (month,day) {
    	if(typeof month !== 'number'){
    		throw 'Number expected in variable month in myUsers::Bday constructor'
    	}
    	if(typeof day !== 'number'){
    		throw 'Number expected in variable day in myUsers::Bday constructor'
    	}
        this.month = month;
        this.day = day;
    });

})();