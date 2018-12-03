angular
    .module('operativosModule')
    .component('fichaOperativoComponent', {
        templateUrl: 'app/modules/operativos/fichaOperativo/fichaOperativo.template.html',
        controller: [
            fichaOperativoComponentController],
        controllerAs: 'fichaOpCtrl',
        bindings: {
            config: '<',
            data: '<'
        }
    });

function fichaOperativoComponentController() {
    var self = this;

    self.$onInit = () => {
        self.initForm(); 
    };

    self.initForm = () => {
        //self.formCollapsed = false;
    };

    self.formCollapse = () => {
        self.config.formCollapsed = !self.config.formCollapsed;
    };
}