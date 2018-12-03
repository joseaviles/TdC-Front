angular
    .module('operativosModule')
    .component('operativosComponent', {
        templateUrl: 'app/modules/operativos/operativos.template.html',
        controller: [
            'operativosService',
            operativosComponentController],
        controllerAs: 'operativosCtrl'
    });

function operativosComponentController(operativosService) {
    var self = this;

    self.$onInit = () => {
        self.config = operativosService.getShortcuts();
    };
}