angular
    .module('transporteApp')
    .factory('sidebarService', [
        function () {
            return {
                /* Configuración de los campos de la sidebar*/
                getSidebarConfig() {
                    return {
                        title: 'Sidebar Title',
                        items: [{
                            name: 'Home',
                            title: 'Inicio',
                            icon: 'icon-home',
                            link: 'home',
                            class: ''
                        }, {
                            name: 'Operativos',
                            title: 'Operativos',
                            icon: 'icon-calendar',
                            link: '"javascript:;"',
                            class: '',
                            subItems: [{
                                name: 'Accesos',
                                title: 'Acceso Operativos',
                                icon: 'icon-home',
                                link: 'homeOperativos'
                            }, {
                                name: 'Consulta',
                                title: 'Consulta',
                                icon: 'fas fa-search',
                                link: 'busquedaOperativos'
                            }, {
                                name: 'Planificacion',
                                title: 'Planificación',
                                icon: 'fas fa-map-marked-alt',
                                link: 'planificaOperativos'
                            },]
                        }, {
                            name: 'Actas',
                            title: 'Actas',
                            icon: 'icon-docs',
                            link: '"javascript:;"',
                            class: '',
                            subItems: [{
                                name: 'Accesos',
                                title: 'Acceso Actas',
                                icon: 'icon-home',
                                link: 'homeActas'
                            }, {
                                name: 'Consulta',
                                title: 'Consulta',
                                icon: 'fas fa-search',
                                link: 'consultaActas'
                            }, {
                                name: 'Registrar Acta',
                                title: 'Registrar Acta',
                                icon: 'fas fa-file',
                                link: 'registraActas'
                            },]
                        }, {
                            name: 'Administracion',
                            title: 'Administración',
                            icon: 'icon-paper-clip',
                            link: '"javascript:;"',
                            class: '',
                            subItems: [{
                                name: 'Accesos',
                                title: 'Acceso Legales',
                                icon: 'icon-home',
                                link: 'homeLegales'
                            }, {
                                name: 'Consulta',
                                title: 'Consulta',
                                icon: 'fas fa-search',
                                link: 'consultaLegales'
                            },]
                        }, {
                            name: 'Soporte',
                            title: 'Soporte',
                            icon: 'icon-settings',
                            link: '"javascript:;"',
                            class: '',
                            subItems: [{
                                name: 'Dispositivos',
                                title: 'Dispositivos',
                                icon: 'fas fa-tablet-alt',
                                link: 'dispositivos'
                            }, {
                                name: 'Usuarios',
                                title: 'Usuarios',
                                icon: 'fas fa-user',
                                link: 'usuarios'
                            }, {
                                name: 'Vehículos',
                                title: 'Vehículos',
                                icon: 'fas fa-car',
                                link: 'vehiculos'
                            }]
                        }, {
                            name: 'Reportes',
                            title: 'Reportes',
                            icon: 'icon-bar-chart',
                            link: '"javascript:;"'
                        }, {
                            name: 'Archivo',
                            title: 'Archivo',
                            icon: 'icon-social-dropbox',
                            link: '"javascript:;"'
                        }]
                    };
                }
            };
        }]);