angular
    .module('homeModule')
    .factory('homeService', [
        'restApiService',
        function (restApiService) {
            return {
                getData: () => {
                    return restApiService.GetResources("Authors")
                        .then(data => { return data; });
                },

                getConfig: () => [{
                    title: 'Operativos',
                    icon: 'fas fa-calendar-alt',//'fa fa-list-alt',
                    description: 'Módulo de Operativos: bla bla.',
                    link: 'homeOperativos'
                }, {
                    title: 'Actas',
                    icon: 'fa fa-file-invoice-dollar',
                    description: 'Módulo de Actas: bla bla bla bla bla.',
                    link: 'homeActas'
                }, {
                    title: 'Administración',
                    icon: 'far fa-copy',
                    description: 'Módulo de Administración Legales: Bla bla bla bla bla.',
                    link: 'homeLegales'
                }, {
                    title: 'Reportes',
                    icon: 'far fa-chart-bar',
                    description: 'Módulo de Reportes: Bla bla bla bla bla.'
                }, {
                    title: 'Archivo',
                    icon: 'fas fa-archive',
                    description: 'Bla bla bla bla bla.'
                },]
            };
        }
    ]);