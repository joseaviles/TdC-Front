angular
    .module('operativosModule')
    .component('filtrosOperativosComponent', {
        templateUrl: 'app/modules/operativos/filtrosOperativos/filtrosOperativos.template.html',
        controller: [
            filtrosOperativosComponentController],
        controllerAs: 'filtrosOpCtrl',
        bindings: {
            config: '<',
            data: '<'
        }
    });

function filtrosOperativosComponentController() {
    var self = this;

    self.$onInit = () => {
        self.initFilters();
        self.setDefaultConfig();

        /* Datos de prueba */
        self.localities = self.getLocalities();
        self.states = self.getStates();
    };

    /* Configuración por defecto */
    self.setDefaultConfig = () => {
        if (self.config == undefined) {
            self.config = {
                title: 'Buscar Operativo',
                headerColor: 'bg-green-soft bg-font-green-soft',
                icon: 'fas fa-search font-white'
            };
        }
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

    /* Filtros */
    self.applyFilters = () => {
        self.filtersCollapsed = true;
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
}