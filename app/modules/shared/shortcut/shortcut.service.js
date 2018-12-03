angular
    .module('sharedModule')
    .factory('shortcutService', [
        function () {
            return {
                algo() {
                    return "algo más";
                }
            };
        }
    ]);