(function() {
    'use strict';

    angular.module("common")
    .directive('officeMenu',['currentUser','$state',officeMenu]);

    function officeMenu(currentUser,$state) {
        return {
                restrict: 'E',
                bindToController: true,
                controllerAs: 'vmd',
                controller: controller,
                scope:{
                    
                },
                templateUrl: 'src/common/menu/partials/menu.html',
                
            };
        
            function controller($state) {
                var vmd = this;
        
                vmd.user;
                vmd.showAs = showAs;
                vmd.active = active;

                activate();
        
                function active(name) {
                    if($state.current.name === name) {
                        return 'active';
                    } else {
                        return '';
                    }
                }

                function activate() {
                    vmd.user = currentUser.getUser();
                }

                function showAs() {
                    if(currentUser.getShowAs() === undefined) {
                        return currentUser.getUser().name;
                    } else {
                        return currentUser.getShowAs().name;
                    }
                }
            }
    }
})();