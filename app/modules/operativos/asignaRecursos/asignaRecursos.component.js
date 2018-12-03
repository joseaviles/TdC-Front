angular
    .module('operativosModule')
    .component('asignaRecursosComponent', {
        templateUrl: 'app/modules/operativos/asignaRecursos/asignaRecursos.template.html',
        controller: [
            asignaRecursosComponentController],
        controllerAs: 'asignaCtrl',
        bindings: {
            resolve: '<',
            config: '<',
            data: '<'
        }
    });

function asignaRecursosComponentController() {
    var self = this;

    self.$onInit = () => { 
        self.initForm();
    };

    /* Inicializo el form*/
    self.initForm = () => {
        if (self.resolve) {
            self.data = '';
            self.config = self.resolve.config;

            self.fichaData = self.resolve.fichaData;
            self.fichaConfig = self.resolve.fichaConfig;
            self.recursosData = self.resolve.recursosData;
            self.recursosConfig = self.resolve.recursosConfig;
        }
    };

    self.submit = () => {
        self.config.button1.action();
    }; 
}