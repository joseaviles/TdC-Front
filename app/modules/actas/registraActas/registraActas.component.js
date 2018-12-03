angular
    .module('actasModule')
    .component('registraActasComponent', {
        templateUrl: 'app/modules/actas/registraActas/registraActas.template.html',
        controller: [ 
            registraActasComponentController],
        controllerAs: 'registraActasCtrl'
    });

function registraActasComponentController() {
    var self = this;

    self.$onInit = () => {
    };
}