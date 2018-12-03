angular
    .module('transporteApp')
    .component('sidebarComponent', {
        templateUrl: 'app/modules/core/sidebar/sidebar.template.html',
        controller: [
            '$timeout',
            '$state',
            'settings',
            'sidebarService',
            sidebarComponentController],
        controllerAs: 'sidebarCtrl'
    });

function sidebarComponentController($timeout, $state, settings, sidebarService) {
    var self = this;

    self.config = null;

    self.$onInit = () => {
        self.config = sidebarService.getSidebarConfig();
        self.settings = settings;

        $timeout(() => {
            Layout.initSidebar($state);
        });
    };
}

/* Configuración de los campos de la sidebar*/
// getSidebarConfig = () => {
//     return {
//         title: 'Sidebar Title',
//         items: [{
//             name: 'Home',
//             title: 'Inicio',
//             icon: 'icon-home',
//             link: 'home',
//             class: ''
//         }, {
//             name: 'Operativos',
//             title: 'Operativos',
//             icon: 'icon-calendar',
//             link: 'operativos',
//             class: '',
//             subItems: [{
//                 name: 'Consulta',
//                 title: 'Consulta',
//                 icon: 'fas fa-search',
//                 link: 'consultaOperativos'
//             }, {
//                 name: 'Planificacion',
//                 title: 'Planificación',
//                 icon: 'fas fa-map-marked-alt',
//                 link: 'planificaOperativos'
//             },]
//         }, {
//             name: 'Actas',
//             title: 'Actas',
//             icon: 'icon-docs',
//             link: 'actas',
//             class: ''
//         }, {
//             name: 'Soporte',
//             title: 'Soporte',
//             icon: 'icon-settings',
//             link: '"javascript:;"',
//             class: '',
//             subItems: [{
//                 name: 'Dispositivos',
//                 title: 'Dispositivos',
//                 icon: 'fas fa-tablet-alt',
//                 link: 'dispositivos'
//             }, {
//                 name: 'Usuarios',
//                 title: 'Usuarios',
//                 icon: 'fas fa-user',
//                 link: 'usuarios'
//             }, {
//                 name: 'Vehículos',
//                 title: 'Vehículos',
//                 icon: 'fas fa-car',
//                 link: 'vehiculos'
//             }]
//         }]
//     };
// };

