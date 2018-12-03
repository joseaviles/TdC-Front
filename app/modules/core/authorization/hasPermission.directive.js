angular
    .module('transporteApp')
    .controller('hasPermissionController', ['$scope', function ($scope) {
        $scope.roles = [];
        $scope.functiones = [];
    }])
    .directive('hasPermission', function (permissionService) {
        return {
            scope: {
                roles: '='
            },
            link: function (scope, element, attrs) {
                var roles = scope.roles;
                var functions = scope.functions;
                var notPermissionFlag = '!';
                var hasRole = false;
                var hasFunction = false;

                if (roles.length > 0) {
                    hasRole = permissionService.hasRole(roles);

                    if (hasRole && functions > 0) {
                        hasFunction = permissionService.hasFunction(functions);
                    } else {
                        hasFunction = true;
                    }
                } else {
                    if (hasRole && hasFunction) {
                        toggleVisibilityBasedOnPermission();
                    }
                }

                function toggleVisibilityBasedOnPermission(value) {
                    var hasPermission = permissionService.hasPermission(value);
                    if (hasPermission && !notPermissionFlag || !hasPermission && notPermissionFlag) {
                        element[0].style.display = 'block';
                        //element[0].add();
                    }
                    else {
                        // element[0].style.display = 'none';
                        element[0].remove();
                    }
                }
            }
        };
    });