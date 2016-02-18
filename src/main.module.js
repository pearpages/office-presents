(function() {
    'use strict';

    angular.module("office-presents", ['ui.router','common','ngTable','myUsers','myEnvelopes','myBdays'])
    .run(function (notifications,users) {
    	users.mock(20);
    });

})();
