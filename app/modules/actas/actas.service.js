angular
    .module('actasModule')
    .factory('actasService', [
        function () {
            return {
                getShortcuts() {
                    return [{
                        title: 'Consulta',
                        icon: 'fas fa-search',
                        description: 'Búsqueda de actas con diversos filtros.',
                        link:'consultaActas'
                    }, {
                        title: 'Registrar Acta',
                        icon: 'fas fa-calendar-alt',
                        description: 'Permite registrar un acta de manera manual.',
                        link:'registraActas'
                    },];
                }
            };
        }
    ]);