angular
    .module('actasModule')
    .component('consultaActasComponent', {
        templateUrl: 'app/modules/actas/consultaActas/consultaActas.template.html',
        controller: [ 
            consultaActasComponentController],
        controllerAs: 'consultaActasCtrl'
    });

function consultaActasComponentController() {
    var self = this;

    self.$onInit = () => {
    };
}