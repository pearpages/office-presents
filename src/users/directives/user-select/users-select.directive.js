(function() {
	'use strict';

	angular.module("myUsers")
	.directive('userSelect',['users',userSelect]);

	function userSelect(users) {
		return {
				restrict: 'E',
				bindToController: true,
				controllerAs: 'vmd',
				controller: controller,
				scope:{
					defaultValue: '@',
					model: '='
				},
				templateUrl: 'src/users/directives/user-select/partials/select.html',
			};
		
			function controller(users) {
				var vmd = this;
		
				vmd.users;

				activate();
		
				function activate() {
					vmd.users = users.getAll();
				}
			}

	}

})();