(function() {
    'use strict';

    angular.module("office-presents")
    .directive('officeMenu',['currentUser',officeMenu]);

    function officeMenu(currentUser) {
        return {
                restrict: 'E',
                bindToController: true,
                controllerAs: 'vmd',
                controller: controller,
                scope:{
                    
                },
                templateUrl: 'src/common/menu/partials/menu.html',
                
            };
        
            //call ang-link if needed
        
            function controller() {
                var vmd = this;
        
                vmd.user;

                activate();
        
                function activate() {
                    vmd.user = currentUser.getUser();
                }
            }
    }
})();