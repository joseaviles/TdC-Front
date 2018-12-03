angular
    .module('transporteApp')
    .component('footerComponent', {
        templateUrl: 'app/modules/core/footer/footer.template.html',
        controller: [
            footerComponentController],
        controllerAs: 'footerCtrl'
    });

function footerComponentController($) {
    var self = this;

    self.copyright = '2018 Evoltis.';

    self.$onInit = () => {
        Layout.initFooter();
        //Demo.init();
    };
}
