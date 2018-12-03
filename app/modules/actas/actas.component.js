angular
    .module('actasModule', [])
    .component('actasComponent', {
        templateUrl: 'app/modules/actas/actas.template.html',
        controller: [
            'actasService',
            actasComponentController],
        controllerAs: 'actasCtrl'
    });

function actasComponentController(actasService) {
    var self = this;

    self.$onInit = () => {
        self.config = actasService.getShortcuts();
    };
}