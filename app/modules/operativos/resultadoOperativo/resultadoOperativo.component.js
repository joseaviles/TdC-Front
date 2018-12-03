angular
    .module('operativosModule')
    .component('resultadoOperativoComponent', {
        templateUrl: 'app/modules/operativos/resultadoOperativo/resultadoOperativo.template.html',
        controller: [
            '$timeout',
            resultadoOperativoComponentController],
        controllerAs: 'resultadoOpCtrl',
        bindings: {
            resolve: '<',
            data: '<',
            config: '<'
        }
    });

function resultadoOperativoComponentController($timeout) {
    var self = this;

    self.$onInit = () => {

        self.localities = self.getLocalities();
        self.routeTypes = self.getRouteTypes();
        self.loading = false;
    };

    self.$onChanges = () => {
        self.getSelectedData();
    };

    self.init = () =>{
        self.loading = true;
        $timeout(null, 3000);
        self.loading = true;
    };

    self.getSelectedData = () => {
        if (self.data) {
        }
        else {
            self.data = {};
        }

        self.data.actas = {};
        self.data.actas.digitales = 0;
        self.data.actas.manuales = 0;
        self.data.actas.total = 0;

        self.data.vehiculos = {};
        self.data.vehiculos.inscriptos = 0;
        self.data.vehiculos.interjuridiccionales = 0;
        self.data.vehiculos.vacios = 0;
        self.data.vehiculos.total = 0;
    };

    self.updateVehiculos = () => {
        self.data.vehiculos.total = self.data.vehiculos.inscriptos * 1 + self.data.vehiculos.interjuridiccionales * 1 + self.data.vehiculos.vacios * 1;
    };

    self.updatesActas = () => {
        self.data.actas.total = self.data.actas.digitales * 1 + self.data.actas.manuales * 1;
    };

    self.submit = () => {
        self.config.button1.action();
    };

    self.formCollapse = () => {
        self.config.formCollapsed = !self.config.formCollapsed;
    };

    /*UI Time Picker config*/
    self.isMeridian = false;
    self.showSpinners = true;
    self.timeOptions = {
        hstep: 1,
        mstep: 10
    };
    self.start = () => {
        var d = new Date();
        d.setHours(9);
        d.setMinutes(0);
        return d;
    };
    self.finish = () => {
        var d = new Date();
        d.setHours(13);
        d.setMinutes(0);
        return d;
    };

    /*Date Picker config*/
    self.open = () => {
        self.opened = true;
    };
    self.format = 'dd-MM-yyyy';
    self.currentText = 'Hoy';
    self.closeText = 'Cerrar';
    self.clearText = 'Limpiar';
    self.dateOptions = {
        dateDisabled: self.disabled,
        formatYear: 'yy',
        maxDate: new Date(2030, 12, 31),
        minDate: new Date(2018, 01, 01),
        startingDay: 1
    };
    // Disable weekend selection
    self.disabled = (data) => {
        var date = data.date,
            mode = data.mode;
        return mode === 'day' && (date.getDay() === 0 || date.getDay() === 6);
    };

    ///////////////////////////////////
    ///////////////////////////////////
    ///////////////////////////////////
    /* Datos de prueba*/
    self.getLocalities = () => {
        return [{
            id: 0,
            name: 'Las Varillas'
        }, {
            id: 1,
            name: 'Río Cuarto'
        }, {
            id: 2,
            name: 'La Falda'
        }, {
            id: 3,
            name: 'Río Ceballos'
        }, {
            id: 4,
            name: 'Río Segundo'
        }, {
            id: 5,
            name: 'Córdoba Capital'
        }];
    };

    self.getRouteTypes = () => {
        return [{
            id: 0,
            name: 'Provincial'
        }, {
            id: 1,
            name: 'Nacional'
        }];
    };
}