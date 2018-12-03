angular
    .module('sharedModule')
    .component('genericModalComponent', {
        templateUrl: 'app/modules/shared/genericModal/genericModal.template.html',
        controller: [
            genericModalComponentController
        ],
        bindings: {
            data: '<',
            config: '<'
        },
        controllerAs: 'modalCtrl'
    });

function genericModalComponentController($scope, $filter, genericTableService) {
    var self = this;
}