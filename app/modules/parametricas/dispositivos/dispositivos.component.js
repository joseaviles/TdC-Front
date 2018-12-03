angular
    .module('parametricasModule')
    .component('dispositivosComponent', {
        templateUrl: 'app/modules/parametricas/dispositivos/dispositivos.template.html',
        controller: [
            'dispositivosService',
            dispositivosComponentController],
        controllerAs: 'dispositivosCtrl',
        bindings: {
            tableData: '<'
        }
    });

function dispositivosComponentController(dispositivosService) {
    var self = this;

    self.showTable = false;
    self.showForm = false;

    self.$onInit = () => {
        self.tableConfig = getTableConfig();
        self.formConfig = getNewFormConfig();
        self.showTable = true;
    };

    /* Acciones de la tabla */
    self.newItem = () => {
        self.formConfig.formTitle = 'Registrar dispositivo';
        self.selected = null;
        //self.field = null;
        self.showForm = true;
        self.showTable = false;
    };

    self.editItem = (value) => {
        self.formConfig.formTitle = 'Actualizar dispositivo';
        self.selected = value;
        self.showForm = true;
        self.showTable = false;

        if (value) {

        }
    };

    self.enableItem = (value) => {
        if (value)
            value.habilitado = !value.habilitado;
    };

    /* Acciones del form */
    self.saveItem = () => {

    };

    self.cancel = () => {
        self.showForm = false;
        self.showTable = true;
    };

    /* Configuración de la tabla */
    getTableConfig = () => {
        return {
            headerActions: [{
                function: self.newItem,
                title: 'Nuevo',
                icon: 'fa fa-plus',
                visible: true,
                link: '',
            }],
            tools: [{
                desc: 'Imprimir',
                link: '',
                icon: 'fa fa-print',
                visible: true
            }, {
                desc: 'Exportar a Excel',
                link: '',
                icon: 'fa fa-file-excel-o',
                visible: true
            }, {
                desc: 'Exportar a PDF',
                link: '',
                icon: 'fa fa-file-pdf-o',
                visible: true
            }],
            showTools: true,
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
                title: 'Dispositivos',
                icon: 'fas fa-tablet-alt font-white',
                headerColor: 'bg-green-soft',
                sort: 'Name',
                showChecks: false,
                columns: [{
                    name: 'nombre',
                    title: 'Nombre',
                    visible: true
                }, {
                    name: 'nroDispositivo',
                    title: 'Nº de Serie',
                    visible: true
                }, {
                    name: 'descripcion',
                    title: 'Descripción',
                    visible: true
                }, {
                    name: 'Actions',
                    title: 'Acciones',
                    visible: true
                }],
                actions: [{
                    name: 'Enable',
                    type: 'primary',
                    function: self.enableItem,
                    visible: true,
                    dynamic: true,
                    getTooltip: self.getTooltip,
                    getIcon: self.getIcon
                }, {
                    name: 'Edit',
                    title: 'Editar',
                    icon: 'fas fa-edit',
                    type: 'primary',
                    function: self.editItem,
                    visible: true,
                    dynamic: false,
                }, {
                    name: 'Delete',
                    title: 'Eliminar',
                    icon: 'fas fa-trash',
                    type: 'primary',
                    function: self.deletetItem,
                    visible: true,
                    dynamic: false,
                }]
            }
        };
    };

    /* Configuración del form */
    function getNewFormConfig() {
        return {
            formTitle: 'Nuevo',
            icon: 'fas fa-plus-circle font-white',
            headerColor: 'bg-blue-sharp',
            fields: [{
                name: 'idDispositivo',
                title: 'Id',
                type: 'text',
                defaultValue: '',
                editable: false,
            }, {
                name: 'nombre',
                title: 'Nombre',
                type: 'text',
                defaultValue: '',
                editable: true,
            }, {
                name: 'nroDispositivo',
                title: 'Nº Serie',
                type: 'text',
                defaultValue: '',
                editable: true,
            }, {
                name: 'descripcion',
                title: 'Descripcion',
                type: 'text',
                defaultValue: '',
                editable: true,
            }],
            actions: [{
                function: self.saveItem,
                name: 'Save',
                title: 'Guardar',
                icon: 'fa fa-check',
                type: 'submit',
                link: '',
                class: 'btn green',
                visible: true,
            }, {
                function: self.cancel,
                name: 'Cancel',
                title: 'Cancelar',
                icon: 'fas fa-ban',
                type: 'button',
                link: '',
                class: 'btn default',
                visible: true
            }]
        };
    }

    self.getTooltip = (value) => {
        return value ? 'Habilitar' : 'Deshabilitar';
    };
    self.getIcon = (value) => {
        return value ? 'fas fa-times' : 'fas fa-check';
    };
}



