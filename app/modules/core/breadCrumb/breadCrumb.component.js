angular
    .module('transporteApp')
    .component('breadCrumbComponent', {
        templateUrl: 'app/modules/core/breadCrumb/breadCrumb.template.html',
        controller: [
            '$state',
            breadCrumbComponentController],
        controllerAs: 'breadCrumbCtrl',
        css: 'app/modules/core/breadCrumb/breadCrumb.css',
        bindings: {
            config: '<'
        }
    });

function breadCrumbComponentController($state) {
    var self = this;

    self.$onInit = () => {
        self.breadCrumbs = getBreadCrumbs($state);
    };
}

getBreadCrumbs = ($state) => {
    var breadCrumb = [];
    var breads = $state.current.data.breads;
    breads.forEach(element => {
        var bread = {};
        bread.link = element;
        obj = $state.get().find(
            obj => {
                if (obj.name != "")
                    return obj.name == element;
            }
        );
        bread.title = obj.data.pageTitle;
        breadCrumb.push(bread);
    });
    return breadCrumb;
};
