angular
    .module('parametricasModule')
    .component('usuariosComponent', {
        templateUrl: 'app/modules/parametricas/usuarios/usuarios.template.html',
        controller: [
            'usuariosService',
            usuariosComponentController],
        controllerAs: 'usuariosCtrl'
    });

function usuariosComponentController(usuariosService) {
    var self = this;

    self.showTable = false;
    self.showForm = false;

    self.$onInit = () => {
        usuariosService.getData()
            .then(data => self.tableData = data);
        self.tableConfig = getTableConfig();
        self.formConfig = getFormConfig();
        self.showTable = true;
    };

    /* Acciones de la tabla */
    self.newItem = () => {
        self.selected = null;
        self.field = null;
        self.showForm = true;
        self.showTable = false;
    };

    self.editItem = (value) => {
        self.selected = value;
        self.showForm = true;
        self.showTable = false;
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
                title: 'Usuarios',
                icon: 'fas fa-user',
                sort: 'Name',
                headerColor: 'green-turquoise',
                showChecks: false,
                columns: [{
                    name: 'Name',
                    title: 'Nombre',
                    order: 1,
                    visible: true
                }, {
                    name: 'Surname',
                    title: 'Apellido',
                    order: 2,
                    visible: true
                }, {
                    name: 'Actions',
                    title: 'Acciones',
                    order: 3,
                    visible: true
                }],
                actions: [{
                    name: 'Enable',
                    title: 'Habilitar/Deshabilitar',
                    icon: 'fas fa-check',
                    type: 'primary',
                    function: '',
                    visible: true
                }, {
                    name: 'Edit',
                    title: 'Editar',
                    icon: 'fas fa-edit',
                    type: 'primary',
                    function: self.editItem,
                    visible: true
                }, {
                    name: 'Delete',
                    title: 'Eliminar',
                    icon: 'fas fa-trash',
                    type: 'primary',
                    function: '',
                    visible: true
                }]
            }
        };
    };

    /* Configuración del form */
    function getFormConfig() {
        return {
            formTitle: 'Nuevo',
            icon: 'fas fa-plus-circle',
            fields: [{
                name: 'Name',
                title: 'Nombre',
                type: 'text',
                defaultValue: '',
                editable: true,
            }, {
                name: 'Surname',
                title: 'Apellido',
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
                visible: true
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
}



