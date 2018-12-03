angular
    .module('operativosModule')
    .factory('formOperativosService', [
        function () {
            return {
                getDataToShow(data, property) {
                    var result = '';
                    if (data != undefined || data != null) {
                        result = data[property];
                    }
                    return result;
                },
            };
        }
    ]);