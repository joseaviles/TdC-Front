angular
    .module('parametricasModule')
    .factory('vehiculosService', [
        'restApiService',
        function (restApiService) {
            return {
                getData() {
                    return restApiService.GetResources("Vehiculos")
                        .then(data => { return data; });
                }
            };
        }
    ]);