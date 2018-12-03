angular
    .module('parametricasModule')
    .factory('dispositivosService', [
        'restApiService',
        function (restApiService) {
            return {
                getData() {
                    return restApiService.GetResources("Dispositivos")
                        .then(data => { return data; });
                }
            };
        }
    ]);