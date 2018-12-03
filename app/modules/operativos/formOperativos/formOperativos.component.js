angular
    .module('operativosModule')
    .component('formOperativosComponent', {
        templateUrl: 'app/modules/operativos/formOperativos/formOperativos.template.html',
        controller: [
            'formOperativosService',
            formOperativosComponentController],
        controllerAs: 'formOpCtrl',
        css: 'app/modules/operativos/formOperativos/formOperativos.css',
        bindings: {
            resolve: '<',
            data: '<',
            config: '<'
        }
    });

function formOperativosComponentController(formOperativosService) {
    var self = this;

    self.$onInit = () => {
        self.setDefaultConfig();
        self.initForm();

        self.localities = self.getLocalities();
        self.routeTypes = self.getRouteTypes();
        self.states = self.getStates();
    };

    /* Configuración por defecto */
    self.setDefaultConfig = () => {
        if (self.config == undefined && self.resolve == undefined) {
            self.config = {
                title: 'Registrar Operativo',
                headerColor: 'green-turquoise',
                icon: 'fas fa-map-marked-alt',
                disableControls: false,
                button1: {
                    id: 0,
                    title: 'Guardar',
                    icon: 'fa fa-check',
                    type: 'submit',
                    class: 'btn btn-success',
                    visible: 'true',
                    disabled: '!formOperativos.$valid'
                },
                button2: {
                    id: 1,
                    title: 'Cancelar',
                    icon: 'fa fa-check',
                    type: 'button',
                    class: 'btn default',
                    visible: 'true',
                    disabled: ''
                }
            };
        }
        if (self.resolve) {
            self.config = self.resolve.config;
        }
    };

    /* Inicializo el form*/
    self.initForm = () => {
        if (self.resolve == undefined) {
            self.data = {
                operativeId: 0,
                selectedLocality: '',
                selectedRouteType: '',
                selectedRoute: '',
                selectedState: '',
                observations: '',
                date: new Date(),
                timeFrom: self.start(),
                timeTo: self.finish(),
                state: 'Planificado',
            };
        }
        else {
            self.data = {
                operativeId: self.resolve.data.operativeId,
                selectedLocality: _.find(self.getLocalities(), ['name', self.resolve.data.locality]),
                selectedRouteType: _.find(self.getRouteTypes(), ['name', self.resolve.data.routeType]),
                selectedState: _.find(self.getStates(), ['name', self.resolve.data.state]),
                selectedRoute: self.resolve.data.route,
                observations: self.resolve.data.observations,
                date: self.resolve.data.date,
                timeFrom: self.resolve.data.timeFrom,
                timeTo: self.resolve.data.timeTo,
                state: self.resolve.data.state,
            };
        }
        self.formCollapsed = false;
    };

    self.formCollapse = () => {
        self.formCollapsed = !self.formCollapsed;
    };

    self.submit = () => {
        self.config.button1.action();
    };

    self.save = () => {
        self.data.operativeId++;
        let operative = {
            codigo: self.data.operativeId,
            localidad: self.data.selectedLocality.name,
            fecha: self.data.date ? self.data.date.toLocaleDateString() : null,
            estado: self.data.state,
            ruta: self.data.selectedRoute,
            tipoRuta: self.data.selectedRouteType,
            horaDesde: self.data.timeFrom,
            horaHasta: self.data.timeTo,
        };

        self.data = null;
        self.initForm();
    };

    self.formatTime = (time) => {
        return time.getHours() + ':' + time.getMinutes();
    }

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
    self.format = 'dd-MMMM-yyyy';
    self.currentText = 'Hoy';
    self.closeText = 'Cerrar';
    self.clearText = 'Limpiar';
    self.dateOptions = {
        dateDisabled: self.disabled,
        formatYear: 'yy',
        maxDate: new Date(2030, 12, 31),
        minDate: new Date(),
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

    self.getStates = () => {
        return [{
            id: 0,
            name: 'Planificado'
        }, {
            id: 1,
            name: 'Asignado'
        }, {
            id: 2,
            name: 'Pendiente'
        }, {
            id: 3,
            name: 'Realizado'
        }];
    };
}