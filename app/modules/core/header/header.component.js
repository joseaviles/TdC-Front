angular
    .module('transporteApp')
    .component('headerComponent', {
        templateUrl: 'app/modules/core/header/header.template.html',
        controller: [
            '$timeout',
            headerComponentController],
        controllerAs: 'headerCtrl'
    });

function headerComponentController($timeout) {
    var self = this;

    self.$onInit = () => {
        self.config = getHeaderConfig();

        $timeout(() => {
           Layout.initHeader();
        });        
    };
}

getHeaderConfig = () => {
    return {
        title: 'Header',
        icon: '',
        avatar: ''
    };
};
