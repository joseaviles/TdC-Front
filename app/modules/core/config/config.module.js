var configModule = angular.module("configModule", [
    "oc.lazyLoad",
]);

/* Configure ocLazyLoader(refer: https://github.com/ocombe/ocLazyLoad) */
configModule.config(['$ocLazyLoadProvider', function ($ocLazyLoadProvider) {
    $ocLazyLoadProvider.config({
        // global configs go here
    });
}
]);

/* Setup global settings */
configModule.factory('settings', ['$rootScope', function ($rootScope) {
    // supported languages
    var settings = {
        layout: {
            pageSidebarClosed: false, // sidebar menu state
            pageContentWhite: false, // set page content layout
            pageBodySolid: false, // solid body color state
            pageAutoScrollOnLoad: 1000 // auto scroll to top on page load
        },
        assetsPath: '../assets',
        globalPath: '../assets/global',
        layoutPath: '../assets/layouts/layout4',

        // httpVerbEnum: {
        //     'GET': 1,
        //     'POST': 2,
        //     'PUT': 3,
        //     'DELETE': 4,
        // }
    };
    $rootScope.settings = settings;
    return settings;
}]);

/* Obtiene las configuraciones del ambiente seleccionado en el archivo de configuración*/
configModule.factory('environment', function ($http) {
    return $http.get('app/modules/core/config/environment.json')
        .then(function (response) { return response.data; });
});

/* Obtiene la ruta relativa de los distintos recursos de la api*/
configModule.factory('apiResources', function ($http) {
    return $http.get('app/modules/core/config/apiResources.json')
        .then(function (response) { return response.data; });
});

/* Provider para levantar el json de configuracion antes que inicie la aplicación*/
configModule.provider('configuration', function ($logProvider) {
    let configurationData;

    this.initialize = (data) => {
        configurationData = data;
    };

    this.$get = () => {
        return configurationData;
    };
});
