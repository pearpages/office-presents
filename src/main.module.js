(function() {
    'use strict';

    angular.module("office-presents", ['ui.router','common','ngTable','myUsers','myEnvelopes','myBdays'])
    .run(function (notifications,mockData) {
    	mockData.mock(20);
    	notifications.add('Data has been mocked','success');
    });

})();
