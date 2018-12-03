angular
    .module('operativosModule')
    .factory('operativosService', [
        function () {
            return {
                getShortcuts() {
                    return [{
                        title: 'Consulta',
                        icon: 'fas fa-search',
                        description: 'Búsqueda de operativos con diversos filtros.',
                        link:'busquedaOperativos'
                    }, {
                        title: 'Planificación',
                        icon: 'fas fa-calendar-alt',
                        description: 'Pantalla de planificación de operativos.',
                        link:'planificaOperativos'
                    },];
                }
            };
        }
    ]);