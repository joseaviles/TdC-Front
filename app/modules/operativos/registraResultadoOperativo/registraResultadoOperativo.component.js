angular
    .module('operativosModule')
    .component('registraResultadoOperativoComponent', {
        templateUrl: 'app/modules/operativos/registraResultadoOperativo/registraResultadoOperativo.template.html',
        controller: [
            registraResultadoOperativoComponentController],
        controllerAs: 'registraResultadoOpCtrl',
        bindings: {
            resolve: '<',
            config: '<',
            data: '<'
        }
    });

function registraResultadoOperativoComponentController() {
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
            self.resultadoData = self.resolve.resultadoData;
            self.resultadoConfig = self.resolve.resultadoConfig;
        }

        self.formCollapsed = false;
    };

    self.submit = () => {
        self.config.button1.action();
    };

    self.formCollapse = () => {
        self.formCollapsed = !self.formCollapsed;
    };
}