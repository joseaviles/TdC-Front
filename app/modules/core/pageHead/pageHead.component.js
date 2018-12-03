angular
    .module('transporteApp')
    .component('pageHeadComponent', {
        templateUrl: 'app/modules/core/pageHead/pageHead.template.html',
        controller: [
            '$state',
            pageHeadComponentController],
        controllerAs: 'pageHeadCtrl'
    });

function pageHeadComponentController($state) {
    var self = this;

    self.$onInit = () => {
        Demo.init();

        // self.$state = $state;
        // self.title = $state.current.data.pageTitle;
        // self.subtitle = $state.current.data.pageSubTitle;
    };
}

