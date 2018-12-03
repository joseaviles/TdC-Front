angular
    .module('sharedModule', [])
    .component('shortcutComponent', {
        templateUrl: 'app/modules/shared/shortcut/shortcut.template.html',
        controller: [
            'shortcutService',
            shortcutComponentController
        ],
        css: 'app/modules/shared/shortcut/shortcut.css',
        bindings: {
            config: '<'
        },
        controllerAs: 'shortcutCtrl'
    });

function shortcutComponentController(shortcutService) {
    var self = this;

    self.$onInit = function () { 
    };
}

