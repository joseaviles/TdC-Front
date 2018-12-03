
/* Transporte App */
var transporteApp = angular.module('transporteApp', [
    'ui.router',
    'ui.bootstrap',
    'ngSanitize',
    'ngResource',
    'angularCSS',
    'ui.select',
    'configModule',
    'routingModule',
    'homeModule',
    'parametricasModule',
    'operativosModule',
    'actasModule'
]), permissionList;

/* Setup App Main Controller */
transporteApp.controller('AppController', ['$scope', '$rootScope', function ($scope, $rootScope) {
    $scope.$on('$viewContentLoaded', function () {
        App.initComponents(); // init core components
        // initComponents(); //  Init entire layout(header, footer, sidebar, etc) on page load if the partials included in server side instead of loading with ng-include directive
    });
}]);

/***
Layout Partials.
By default the partials are loaded through AngularJS ng-include directive. In case they loaded in server side(e.g: PHP include function) then below partial
initialization can be disabled and Layout.init() should be called on page load complete as explained above.
***/

/* Setup Layout Part - Header */
transporteApp.controller('HeaderController', ['$scope', 'settings', function ($scope, settings) {
    $scope.$on('$includeContentLoaded', function () {
        Layout.initHeader(); // init header
    });
}]);

// /* Setup Layout Part - Sidebar */
// transporteApp.controller('SidebarController', ['$state', '$scope', function ($state, $scope) {
//     $scope.$on('$includeContentLoaded', function () {
//         Layout.initSidebar($state); // init sidebar
//     });
// }]);

/* Setup Layout Part - PageHead */
// transporteApp.controller('PageHeadController', ['$scope', function ($scope) {
//     $scope.$on('$includeContentLoaded', function () {
//         Demo.init(); // init theme panel
//     });
// }]);

/* Setup Layout Part - Quick Sidebar */
// transporteApp.controller('QuickSidebarController', ['$scope', function ($scope) {
//     $scope.$on('$includeContentLoaded', function () {
//         setTimeout(function () {
//             QuickSidebar.init(); // init quick sidebar
//         }, 2000);
//     });
// }]);

/* Setup Layout Part - Theme Panel */
// transporteApp.controller('ThemePanelController', ['$scope', function ($scope) {
//     $scope.$on('$includeContentLoaded', function () {
//         Demo.init(); // init theme panel
//     });
// }]);

/* Setup Layout Part - Footer */
// transporteApp.controller('FooterController', ['$scope', function ($scope) {
//     $scope.$on('$includeContentLoaded', function () {
//         Layout.initFooter(); // init footer
//     });
// }]);

/* Init global settings and run the app */
transporteApp.run(['$rootScope',
    '$state',
    function ($rootScope, $state) {
        $rootScope.$state = $state; // state to be accessed from view

        //$rootScope.$settings = settings; // state to be accessed from view

        // PRUEBAS//

        // restApiService.GetResource("Authors", { id: 1 })
        //     .then(data => { console.log(data); });

        //$log.info(['Hola', 'Chau']);

    }
]);

transporteApp.run(function (permissionService, $state) {
    permissionService.setPermissions(permissionList);

});

/* Filtro para utilizar junto a la paginación */
transporteApp.filter('start', function () {
    return function (input, start) {
        if (!input || !input.length) { return; }
        start = +start;
        return input.slice(start);
    };
});


/* Manual bootstrapping para levantar primero el archivo de configuración y luego iniciar la app*/
angular.element(document).ready(() => {
    $.get('app/modules/core/config/environment.json', (response) => {
        angular.module('configModule').config((configurationProvider) => {
            configurationProvider.initialize(response);
        });

        var array = {
            'roles': {
                'admin': [
                    'registrar',
                    'borrar'
                ],
                'superAdmin': [
                    'registrar2',
                    'borrar2'
                ]
            },
            'pantallas': {
                'home': [
                    'registrar3',
                    'borrar3'
                ]
            }
        };
        permissionList = array;

        angular.bootstrap(document, ['transporteApp']);
    });
});
