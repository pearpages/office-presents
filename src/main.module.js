(function() {
    'use strict';

    angular.module("office-presents", ['ui.router','common','home','ngTable','myUsers','myEnvelopes','myBdays'])
    .run(function (notifications,mockData,users,currentUser) {
    	mockData.mock(20);
    	var user = users.getUser('PerePages');
    	//user.role = 'ADMIN';
    	currentUser.setUser(user);
    	notifications.add('Data has been mocked','success');
    });

})();
