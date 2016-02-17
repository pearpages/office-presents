(function() {
	'use strict';

	angular.module("myUsers")
	.filter('userLink', ['users','$sce',userLink]);

	function userLink(users,$sce) {
  		return function(id) {
  			var user = users.getUser(id);
    		return $sce.trustAsHtml('<a href="#/users/user/'+id+'">'+user.name+'</a>');
  		};
  	}

})();