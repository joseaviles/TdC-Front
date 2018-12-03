angular
    .module('operativosModule')
    .component('busquedaOperativosComponent', {
        templateUrl: 'app/modules/operativos/busquedaOperativos/busquedaOperativos.template.html',
        controller: [
            'busquedaOperativosService',
            '$uibModal',
            busquedaOperativosComponentController],
        controllerAs: 'busquedaOpCtrl',
        css: 'app/modules/operativos/busquedaOperativos/busquedaOperativos.css'
    });

function busquedaOperativosComponentController(busquedaOperativosService, $uibModal) {
    var self = this;

    self.$onInit = () => {
        self.initFilters();
        self.initGrid();

        /* Datos de prueba */
        self.localities = self.getLocalities();
        self.states = self.getStates();
        self.pageSizes = self.getPageSizes();

        self.selectedOperative = null;
        self.operatives = self.getOperatives();
    };

    /* Inicializo los filtros */
    self.initFilters = () => {
        self.dateFrom = firstDay;
        self.dateTo = lastDay;
        self.selectedLocality = '';
        self.selectedState = '';
        self.selectedCode = '';
        self.filtersCollapsed = false;
    };

    /* Inicializo la grilla */
    self.initGrid = () => {
        self.selectedPageSize = '';
        self.query = '';
        self.tableConfig = self.getTableConfig();
        self.gridCollapsed = false;
    };

    /* Filtros */
    self.applyFilters = () => {
        self.filtersCollapsed = true;
        self.operatives = self.getOperatives();
    };

    self.filtersCollapse = () => {
        self.filtersCollapsed = !self.filtersCollapsed;
    };

    /* Date Picker */
    var date = new Date();
    var firstDay = new Date(date.getFullYear(), date.getMonth(), 1);
    var lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0);

    self.openFrom = () => {
        self.openedFrom = true;
    };
    self.openTo = () => {
        self.openedTo = true;
    };

    self.format = 'dd-MMMM-yyyy';
    self.currentText = 'Hoy';
    self.closeText = 'Cerrar';
    self.clearText = 'Limpiar';

    self.dateOptionsFrom = {
        dateDisabled: self.disabled,
        formatYear: 'yy',
        maxDate: new Date(2030, 12, 31),
        minDate: new Date(2018, 01, 01),
        startingDay: 1
    };

    self.dateOptionsTo = {
        dateDisabled: self.disabled,
        formatYear: 'yy',
        maxDate: new Date(2030, 12, 31),
        minDate: new Date(2018, 01, 01),
        startingDay: 1
    };

    /* Grid */
    self.filteredItems = [];
    self.selectedPageSize = null;
    self.currentPage = 1;
    self.itemsPerPage = 50;

    self.setPageSize = () => {
        self.itemsPerPage = isNaN(parseInt(self.selectedPageSize.value)) ? self.data.length : parseInt(self.selectedPageSize.value);
        self.setPagingData();
    };

    self.clearSearch = () => {
        self.query = undefined;
    };

    self.getIcon = (column) => {
        if (column == self.column) {
            return self.reverse ? 'fa-chevron-up' : 'fa-chevron-down';
        }
        return '';
    };

    self.checkAll = () => {
        self.checked = !self.checked;
    };

    self.getData = (data, property) => {
        return busquedaOperativosService.getDataToShow(data, property);
    };

    self.gridCollapse = () => {
        self.gridCollapsed = !self.gridCollapsed;
    };



    ///////////////////////////////
    ///////////////////////////////
    /* Datos de prueba */
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

    self.getStates = () => {
        return [{
            id: 0,
            name: 'Planificado'
        }, {
            id: 1,
            name: 'Asignado'
        }, {
            id: 2,
            name: 'Realizado'
        }, {
            id: 3,
            name: 'Cancelado'
        }];
    };

    self.getPageSizes = () => {
        return [{
            id: 0,
            value: '10'
        }, {
            id: 1,
            value: '20'
        }, {
            id: 2,
            value: '50'
        }, {
            id: -1,
            value: 'Todos'
        }];
    };

    self.getOperatives = () => {
        return [{
            idOperativo: '01',
            fecha: '06/11/2018',
            horario: '09:00 - 12:30',
            localidad: 'San Antonio',
            estado: 'Realizado',
            route: 36,
            routeType: 'Nacional'
        }, {
            idOperativo: '02',
            fecha: '16/11/2018',
            horario: '09:00 - 12:30',
            localidad: 'Las Varillas',
            estado: 'Realizado',
            route: 36,
            routeType: 'Nacional'
        }, {
            idOperativo: '03',
            fecha: '26/11/2018',
            horario: '09:00 - 12:30',
            localidad: 'Río Ceballos',
            estado: 'Pendiente',
            route: 36,
            routeType: 'Nacional'
        }, {
            idOperativo: '04',
            fecha: '12/11/2018',
            horario: '09:00 - 12:30',
            localidad: 'Las Varillas',
            estado: 'Cancelado',
            route: 36,
            routeType: 'Nacional'
        }, {
            idOperativo: '05',
            fecha: '27/11/2018',
            horario: '09:00 - 12:30',
            localidad: 'Alta Gracia',
            estado: 'Pendiente',
            route: 36,
            routeType: 'Nacional'
        }, {
            idOperativo: '06',
            fecha: '28/11/2018',
            horario: '09:00 - 12:30',
            localidad: 'Salsipuedes',
            estado: 'Pendiente',
            route: 36,
            routeType: 'Nacional'
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
                    name: 'idOperativo',
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
                    function: self.editOperative,
                    visible: true,
                    dataToggle: ''
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
                    function: self.assignResources,
                    visible: true
                }, {
                    name: 'Show',
                    title: 'Consultar operativo',
                    icon: 'fas fa-search',
                    type: 'primary',
                    function: self.showOperative,
                    visible: true
                }, {
                    name: 'Show',
                    title: 'Editar resultado operativo',
                    icon: 'far fa-save',
                    type: 'primary',
                    function: self.editOperativeResult,
                    visible: true
                }]
            }
        };
    };

    self.editOperative = (operative) => {
        self.updateFormConfig = self.getUpdateFormConfig();

        // datos prueba usar operative
        let aux = {
            operativeId: '06',
            date: new Date(2018, 11, 28, 9, 45, 0, 0),
            timeFrom: new Date(0, 0, 0, 9, 45, 0, 0),
            timeTo: new Date(0, 0, 0, 19, 15, 0, 0),
            locality: 'Las Varillas',
            state: 'Pendiente',
            route: 36,
            routeType: 'Nacional',
            observations: 'Esto es una prueba'
        };

        self.modalInstance = $uibModal.open({
            animation: true,
            component: 'formOperativosComponent',
            backdrop: 'static',
            keyboard: true,
            size: 'lg',
            resolve: {
                config: () => { return self.updateFormConfig; },
                data: () => { return aux; }
            }
        });

        self.modalInstance.result
            .then((result) => { console.log("modal closed"); })
            .catch((reason) => { console.log("modal rejected"); });
    };

    self.assignResources = (operative) => {
        self.assignFormConfig = self.getAssignFormConfig();

        // datos prueba usar operative
        let dataFicha = {
            operativeId: '06',
            date: '28/11/2018',
            time: '11:45',
            locality: 'Las Varillas',
            state: 'Pendiente',
            route: '36',
            routeType: 'Nacional',
            observations: 'Esto es una prueba'
        };
        let configFicha = {
            title: 'Datos del operativo',
        };
        let configRecursos = {
            title: 'Recursos asignados',
        };

        self.modalInstance = $uibModal.open({
            animation: true,
            component: 'asignaRecursosComponent',
            backdrop: 'static',
            keyboard: true,
            size: 'lg',
            resolve: {
                config: () => { return self.assignFormConfig; },
                data: () => { return ''; },
                fichaConfig: () => { return configFicha; },
                fichaData: () => { return dataFicha; },
                recursosConfig: () => { return configRecursos; },
                recursosData: () => { return ''; },
            }
        });

        self.modalInstance.result
            .then((result) => { console.log("modal closed"); })
            .catch((reason) => { console.log("modal rejected"); });
    };

    self.showOperative = (operative) => {
        self.showFormConfig = self.getShowFormConfig();

        // datos prueba usar operative
        let dataFicha = {
            operativeId: '06',
            date: '28/11/2018',
            time: '11:45',
            locality: 'Las Varillas',
            state: 'Pendiente',
            route: '36',
            routeType: 'Nacional',
            observations: 'Esto es una prueba',
        };
        let configFicha = {
            title: 'Datos del operativo',
        };
        let configRecursos = {
            title: 'Recursos asignados',
        };
        let dataRecursos = {
            inspectors: [{
                id: 0,
                name: 'Josito Aviles'
            }, {
                id: 1,
                name: 'Fede "Pochola" Behar'
            }],
            vehicles: [{
                id: 0,
                name: 'Suran ADF980'
            }, {
                id: 1,
                name: 'EcoSport FGH768'
            }]
        };

        self.modalInstance = $uibModal.open({
            animation: true,
            component: 'consultaOperativoComponent',
            backdrop: 'static',
            keyboard: true,
            size: 'lg',
            resolve: {
                config: () => { return self.showFormConfig; },
                data: () => { return ''; },
                fichaConfig: () => { return configFicha; },
                fichaData: () => { return dataFicha; },
                recursosConfig: () => { return configRecursos; },
                recursosData: () => { return dataRecursos; },
            }
        });

        self.modalInstance.result
            .then((result) => { console.log("modal closed"); })
            .catch((reason) => { console.log("modal rejected"); });
    };

    self.editOperativeResult = (operative) => {
        self.resultFormConfig = self.getResultFormConfig();

        // datos prueba usar operative
        let dataFicha = {
            operativeId: '06',
            date: '28/11/2018',
            time: '11:45',
            locality: 'Las Varillas',
            state: 'Pendiente',
            route: '36',
            routeType: 'Nacional',
            observations: 'Esto es una prueba'
        };
        let configFicha = {
            title: 'Ficha del operativo',
            formCollapsed: true,
        };
        let configRecursos = {
            title: 'Recursos asignados',
            formCollapsed: true,
        };
        let dataRecursos = {
            inspectors: [{
                id: 0,
                name: 'Josito Aviles'
            }, {
                id: 1,
                name: 'Fede "Pochola" Behar'
            }],
            vehicles: [{
                id: 0,
                name: 'Suran ADF980'
            }, {
                id: 1,
                name: 'EcoSport FGH768'
            }]
        };
        let configResultado = {
            title: 'Resultado del operativo',
            formCollapsed: false,
        };
        let dataResultado = {};

        self.modalInstance = $uibModal.open({
            animation: true,
            component: 'registraResultadoOperativoComponent',
            backdrop: 'static',
            keyboard: true,
            size: 'lg',
            resolve: {
                config: () => { return self.resultFormConfig; },
                data: () => { return ''; },
                fichaConfig: () => { return configFicha; },
                fichaData: () => { return dataFicha; },
                recursosConfig: () => { return configRecursos; },
                recursosData: () => { return dataRecursos; },
                resultadoConfig: () => { return configResultado; },
                resultadoData: () => { return dataResultado; },
            }
        });

        self.modalInstance.result
            .then((result) => { console.log("modal closed"); })
            .catch((reason) => { console.log("modal rejected"); });
    };

    self.getUpdateFormConfig = () => {
        return {
            title: 'Actualizar operativo',
            headerColor: 'blue-madison',
            icon: 'fas fa-map-marked-alt',
            disableControls: false,
            showButtons: true,
            button1: {
                id: 0,
                title: 'Aceptar',
                icon: 'fas fa-check',
                type: 'submit',
                class: 'btn btn-success',
                visible: true,
                disabled: '!formOperativos.$valid',
                action: self.Accept
            },
            button2: {
                id: 0,
                title: 'Cancelar',
                icon: '',
                type: 'button',
                class: 'btn btn-default',
                visible: true,
                disabled: '',
                action: self.Cancel
            }
        };
    };

    self.getAssignFormConfig = () => {
        return {
            title: 'Asignar recursos',
            headerColor: 'blue-madison',
            icon: 'fas fa-map-marked-alt',
            disableControls: false,
            showButtons: true,
            button1: {
                id: 0,
                title: 'Aceptar',
                icon: 'fas fa-check',
                type: 'submit',
                class: 'btn btn-success',
                visible: true,
                disabled: '!formOperativos.$valid',
                action: self.Accept
            },
            button2: {
                id: 0,
                title: 'Cancelar',
                icon: '',
                type: 'button',
                class: 'btn btn-default',
                visible: true,
                disabled: '',
                action: self.Cancel
            }
        };
    };

    self.getShowFormConfig = () => {
        return {
            title: 'Consultar operativo',
            headerColor: 'blue-madison',
            icon: 'fas fa-map-marked-alt',
            disableControls: true,
            showButtons: true,
            button1: {
                id: 0,
                title: 'Aceptar',
                icon: 'fas fa-check',
                type: 'submit',
                class: 'btn btn-success',
                visible: true,
                disabled: '',
                action: self.Accept
            },
        };
    };

    self.getResultFormConfig = () => {
        return {
            title: 'Editar resultado operativo',
            headerColor: 'blue-madison',
            icon: 'fas fa-map-marked-alt',
            disableControls: false,
            showButtons: true,
            button1: {
                id: 0,
                title: 'Guardar',
                icon: 'fas fa-check',
                type: 'submit',
                class: 'btn btn-success',
                visible: true,
                disabled: '!formOperativos.$valid',
                action: self.Accept
            },
            button2: {
                id: 0,
                title: 'Cancelar',
                icon: '',
                type: 'button',
                class: 'btn btn-default',
                visible: true,
                disabled: '',
                action: self.Cancel
            }
        };
    };

    self.Accept = () => {
        self.modalInstance.close();
    };

    self.Cancel = () => {
        self.modalInstance.close(console.log("modal closed bien"));
    };
}