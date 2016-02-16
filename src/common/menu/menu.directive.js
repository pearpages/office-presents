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
        
            function controller() {
                var vmd = this;
        
                vmd.user;
                vmd.mockUser;

                activate();
        
                function activate() {
                    vmd.user = currentUser.getUser();
                    vmd.mockUser = currentUser;
                }
            }
    }
})();