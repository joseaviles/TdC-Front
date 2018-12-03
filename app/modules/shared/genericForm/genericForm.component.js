angular
    .module('sharedModule')
    .component('genericFormComponent', {
        templateUrl: 'app/modules/shared/genericForm/genericForm.template.html',
        controller: [
            genericFormComponentController
        ],
        bindings: {
            data: '<',
            config: '<',
            selected: '<'
        },
        controllerAs: 'formCtrl',
        css: 'app/modules/shared/genericForm/genericForm.css'
    });

function genericFormComponentController() {
    var self = this;

    self.getDataToShow = (field) => {
        if (self.selected != undefined || self.selected != null) {
            return self.selected[field];
        }
        return '';
    };
}