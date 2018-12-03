angular
    .module('operativosModule')
    .component('recursosOperativoComponent', {
        templateUrl: 'app/modules/operativos/recursosOperativo/recursosOperativo.template.html',
        controller: [
            recursosOperativoComponentController],
        controllerAs: 'recursosOpCtrl',
        bindings: {
            config: '<',
            data: '<'
        }
    });

function recursosOperativoComponentController() {
    var self = this;

    self.$onInit = () => {
        self.inspectors = self.getInspectors();
        self.vehicles = self.getVehicles();
        self.devices = self.getDevices();
        self.getSelectedData();
        //self.formCollapsed = false;
    };

    self.getSelectedData = () => {
        if (self.data) {
            self.data.selectedInspectors = self.findItems(self.inspectors, self.data.inspectors);
            self.data.selectedVehicles = self.findItems(self.vehicles, self.data.vehicles);
            self.data.selectedDevices = self.findItems(self.devices, self.data.devices);
        }
        else {
            self.data = {};
        }
    };

    self.formCollapse = () => {
        self.config.formCollapsed = !self.config.formCollapsed;
    };

    self.findItems = (collection, items) => {
        let result = [];
        _.forEach(items, (item) => {
            result.push(angular.copy(_.find(collection, ['name', item.name])));
        });
        return result;
    };

    ///////////////////////////////
    ///////////////////////////////
    /* Datos de prueba */
    self.getInspectors = () => {
        return [{
            id: 0,
            name: 'Josito Aviles'
        }, {
            id: 1,
            name: 'Fede "Pochola" Behar'
        }, {
            id: 2,
            name: 'Maxi Tinta Roja'
        }];
    };

    self.getVehicles = () => {
        return [{
            id: 0,
            name: 'Suran ADF980'
        }, {
            id: 1,
            name: 'EcoSport FGH768'
        }, {
            id: 2,
            name: 'SW4 ad324fg'
        }, {
            id: 3,
            name: 'Aircross aa435rd'
        }];
    };

    self.getDevices = () => {
        return [{
            id: 0,
            name: 'Tablet 1'
        }, {
            id: 1,
            name: 'Tablet 2'
        }, {
            id: 2,
            name: 'Tablet 3'
        }, {
            id: 3,
            name: 'Tablet 4'
        }];
    };
}
