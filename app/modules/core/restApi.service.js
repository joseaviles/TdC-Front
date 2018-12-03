angular
    .module('transporteApp')
    .factory('restApiService', [
        '$resource',
        '$q',
        '$log',
        'environment',
        'apiResources',
        function ($resource, $q, $log, environment, apiResources) {

            return {

                GetResource(resource, params) {
                    var deferred = $q.defer();
                    GetFullUrl(resource)
                        .then(url => {
                            $resource(url)
                                .get(params)
                                .$promise
                                .then(data => {
                                    //$log.log(JSON.stringify(data));
                                    deferred.resolve(data);
                                },
                                    error => {
                                        $log.error(JSON.stringify(error));
                                    });
                        });
                    return deferred.promise;
                },

                GetResources(resource) {
                    var deferred = $q.defer();
                    GetFullUrl(resource)
                        .then(url => {
                            $resource(url)
                                .query()
                                .$promise
                                .then(data => {
                                    //$log.log(JSON.stringify(data));
                                    deferred.resolve(data);
                                },
                                    error => {
                                        $log.error(JSON.stringify(error));
                                    });
                        });
                    return deferred.promise;
                },

                DeleteResource(resource) {
                    return null;
                }
            };

            /* Métodos privados */
            function GetApiUrl() {
                return environment
                    .then(data => {
                        var seleccionado = data.ambientes.seleccionado;
                        var ambienteSeleccionado = data.ambientes[seleccionado];
                        return ambienteSeleccionado.apiUrlBase;
                    },
                        error => { $log.error(error); });
            }

            function GetResourceUrl(resource) {
                return apiResources
                    .then(data => {
                        var obj = data[resource].url;
                        return obj;
                    },
                        error => { $log.error(error); });
            }

            function GetFullUrl(resource) {
                return $q.all([GetApiUrl(), GetResourceUrl(resource)])
                    .then(data => {
                        return data[0] + data[1];
                    },
                        error => { $log.error(error); });
            }
        }
    ]);

