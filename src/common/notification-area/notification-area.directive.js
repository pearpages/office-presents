(function() {
	'use strict';

	angular.module("common")
	.directive('notificationArea',['notifications',notificationArea]);

	function notificationArea(notifications) {
		return {
				restrict: 'E',
				bindToController: true,
				controllerAs: 'vmd',
				controller: controller,
				scope:{
					//variable: '@=&'
				},
				templateUrl: 'src/common/notification-area/partials/notification-area.html'
			};
		
			function controller(notifications) {
				var vmd = this;
		
				vmd.notifications = notifications;
				
			}
	}
})();