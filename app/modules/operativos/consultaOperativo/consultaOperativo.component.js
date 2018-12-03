angular
    .module('operativosModule')
    .component('consultaOperativoComponent', {
        templateUrl: 'app/modules/operativos/consultaOperativo/consultaOperativo.template.html',
        controller: [
            consultaOperativoComponentController],
        controllerAs: 'consultaOpCtrl',
        bindings: {
            resolve: '<',
            config: '<',
            data: '<'
        }
    });

function consultaOperativoComponentController() {
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