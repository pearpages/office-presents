(function() {
    'use strict';

    angular.module("office-presents")
    .directive('officeMenu',[officeMenu]);

    function officeMenu() {
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
        
                activate();
        
                function activate() {
                    
                }
            }
    }
})();