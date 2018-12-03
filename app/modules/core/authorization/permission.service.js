angular
    .module('transporteApp')
    .factory('permissionService',
        function ($rootScope, $log) {
            var permissionList = {};
            var flag = false;
            return {
                setPermissions: (permissions) => {
                    permissionList = permissions;
                    $rootScope.$broadcast('permissionsChanged');
                },

                hasRole: value => {
                    angular.forEach(value, function (value) {

                        if (!flag) {
                            flag = recursiveFunction(value, permissionList);
                        }
                    });
                    $log.info(flag);
                    return flag;
                }
            };

            function recursiveFunction(value, obj) {
                if (!flag) {
                    _.each(obj, function (property) {
                        $log.info(property);
                        if (typeof (property) === 'object') {
                            if (_.includes(Object.keys(property), value)) {
                                flag = true;
                            } else {
                                recursiveFunction(value, property);
                            }
                        }
                        else {
                            if (property === value) {
                                flag = true;
                            }
                        }

                    });
                }
                return flag;
            }
        });      