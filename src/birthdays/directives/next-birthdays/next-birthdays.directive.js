(function() {
	'use strict';

	angular.module("myBdays")
	.directive('nextBirthdays',['birthdays','NgTableParams',nextBirthdays]);

	function nextBirthdays(birthdays,NgTableParams) {

		return {
				restrict: 'E',
				bindToController: true,
				controllerAs: 'vmd',
				controller: controller,
				scope:{
					},
				templateUrl: 'src/birthdays/directives/next-birthdays/partials/next-birthdays.html',
			};
		
			function controller() {
				var vmd = this;

				vmd.birthdays;
				vmd.hasEnvelope = hasEnvelope;
		
				activate();
		
				function activate() {
					vmd.birthdays = new NgTableParams({page:1,count: 10},{data: birthdays.getAll()});
				}

				function hasEnvelope(envelope) {
            		if(envelope.responsible === null || envelope.responsible === undefined) {
                		return 'NO';
            		} else {
                		return 'YES';
            		}
        		}
			}
	}
})();