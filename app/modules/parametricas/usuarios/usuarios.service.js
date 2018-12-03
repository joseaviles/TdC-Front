angular
    .module('parametricasModule')
    .factory('usuariosService', [
        'restApiService',
        function (restApiService) {
            return {
                getData() {
                    return restApiService.GetResources("Authors")
                        .then(data => { return data; });
                }
            };
        }
    ]);