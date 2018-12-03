angular
    .module('operativosModule')
    .component('planificaOperativosComponent', {
        templateUrl: 'app/modules/operativos/planificaOperativos/planificaOperativos.template.html',
        controller: [
            'planificaOperativosService',
            planificaOperativosComponentController],
        controllerAs: 'planificaOpCtrl',
        css: 'app/modules/operativos/planificaOperativos/planificaOperativos.css',
        bindings: {
            data: '<',
            config: '<'
        }
    });

function planificaOperativosComponentController(planificaOperativosService) {
    var self = this;

    self.$onInit = () => {
        self.setDefaultConfig();
        self.init();
        self.initGrid();

        self.localities = self.getLocalities();
        self.routeTypes = self.getRouteTypes();
    };

    /* Configuración por defecto */
    self.setDefaultConfig = () => {
        if (self.config == undefined) {
            self.config = {
                title: 'Registrar Operativo',
                headerColor: 'green-turquoise',
                icon: 'fas fa-map-marked-alt',
                showBreads: true,                
            };
        }
    };

    /* Inicializo el form*/
    self.init = () => {
        if (self.data == undefined) {
            self.data = {
                operativeId: 0,
                selectedLocality: '',
                selectedRouteType: '',
                selectedRoute: '',
                observations: '',
                date: new Date(),
                timeFrom: self.start(),
                timeTo: self.finish(),
                state: 'Planificado',
            }; 
        }
        self.formCollapsed = false;
    };

    self.initGrid = () => {
        self.tableConfig = self.getTableConfig();
        self.operatives = [];
    };

    self.formCollapse = () => {
        self.formCollapsed = !self.formCollapsed;
    };

    self.addOperative = () => {
        self.data.operativeId++;
        let operative = {
            codigo: self.data.operativeId,
            localidad: self.data.selectedLocality.name,
            fecha: self.data.date ? self.data.date.toLocaleDateString() : null,
            estado: self.data.state,
            horario: self.formatTime(self.data.timeFrom) + ' - ' + self.formatTime(self.data.timeTo)
        };

        self.operatives.push(angular.copy(operative));
        self.data = null; self.init();
    };

    self.formatTime = (time) => {
        return time.getHours() + ':' + time.getMinutes();
    };

    self.getData = (data, property) => {
        return planificaOperativosService.getDataToShow(data, property);
    };

    /*UI Time Picker*/
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

    /*Date Picker */
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

    self.getTableConfig = () => {
        return {
            pagination: [{
                index: 1,
                value: '5',
                default: true
            }, {
                index: 2,
                value: '10',
                default: false
            }, {
                index: 3,
                value: '20',
            }, {
                index: -1,
                value: 'Todos',
            }],
            showPageSize: true,
            showPagination: true,
            showSearchBar: true,
            dataToShow: {
                sort: 'Name',
                showChecks: true,
                columns: [{
                    name: 'codigo',
                    title: 'Código',
                    order: 1,
                    visible: true
                }, {
                    name: 'fecha',
                    title: 'Fecha',
                    order: 3,
                    visible: true
                }, {
                    name: 'horario',
                    title: 'Horario',
                    order: 4,
                    visible: true
                }, {
                    name: 'localidad',
                    title: 'Localidad',
                    order: 5,
                    visible: true
                }, {
                    name: 'estado',
                    title: 'Estado',
                    order: 6,
                    visible: true
                }, {
                    name: 'Actions',
                    title: 'Acciones',
                    order: 7,
                    visible: true
                }],
                actions: [{
                    name: 'Edit',
                    title: 'Editar operativo',
                    icon: 'fas fa-edit',
                    type: 'primary',
                    function: self.editItem,
                    visible: true
                }, {
                    name: 'SendMail',
                    title: 'Enviar mail',
                    icon: 'far fa-envelope',
                    type: 'primary',
                    function: '',
                    visible: true
                }, {
                    name: 'Assign',
                    title: 'Asignar operativo',
                    icon: 'fas fa-cog',
                    type: 'primary',
                    function: '',
                    visible: true
                }, {
                    name: 'Search',
                    title: 'Consultar operativo',
                    icon: 'fas fa-search',
                    type: 'primary',
                    function: '',
                    visible: true
                }]
            }
        };
    };
}