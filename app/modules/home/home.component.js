angular
    .module('homeModule', [
        'sharedModule'
    ])
    .component('homeComponent', {
        templateUrl: 'app/modules/home/home.template.html',
        controller: [
            'homeService',
            homeComponentController],
        css: 'app/modules/home/home.css',
        controllerAs: 'homeCtrl'
    });

function homeComponentController(homeService) {
    var self = this;

    // self.showTable = false;
    // self.showForm = false;

    self.$onInit = function () {

        // homeService.getData()
        //     .then(data => self.tableData = data);

        self.config = homeService.getConfig();

        // self.tableConfig = getTableConfig();
        // self.formConfig = getFormConfig();

        // self.showTable = true;
    };

    // /* Acciones de la tabla*/
    // self.newItem = () => {
    //     self.selected = null;
    //     self.field = null;
    //     self.showForm = true;
    //     self.showTable = false;
    // };

    // self.editItem = (value) => {
    //     self.selected = value;
    //     self.showForm = true;
    //     self.showTable = false;
    // };

    // /* Acciones del form*/
    // self.saveItem = () => {

    // };

    // self.cancel = () => {
    //     self.showForm = false;
    //     self.showTable = true;
    // };

    /* Configuración de los shorcuts*/
    // function getShortcutList() {
    //     return [{
    //         title: 'Operativos',
    //         icon: 'fa fa-list-alt',
    //         description: 'Módulo de operativos: bla bla.'
    //     }, {
    //         title: 'Actas',
    //         icon: 'fa fa-files-o',
    //         description: 'Módulo de legales: bla bla bla bla bla.'
    //     }, {
    //         title: 'Estadísticas',
    //         icon: 'far fa-chart-bar',
    //         description: 'Módulo de estadísticas: Bla bla bla bla bla.'
    //     }, {
    //         title: 'Archivo',
    //         icon: 'fas fa-archive',
    //         description: 'Bla bla bla bla bla.'
    //     },];
    // }

    // /* Configuración de la tabla*/
    // function getTableConfig() {
    //     return {
    //         headerActions: [{
    //             function: self.newItem,
    //             title: 'Nuevo',
    //             icon: 'fa fa-plus',
    //             visible: true,
    //             link: '',
    //         }],
    //         tools: [{
    //             desc: 'Imprimir',
    //             link: '',
    //             icon: 'fa fa-print',
    //             visible: true
    //         }, {
    //             desc: 'Exportar a Excel',
    //             link: '',
    //             icon: 'fa fa-file-excel-o',
    //             visible: true
    //         }, {
    //             desc: 'Exportar a PDF',
    //             link: '',
    //             icon: 'fa fa-file-pdf-o',
    //             visible: true
    //         }],
    //         showTools: true,
    //         pagination: [{
    //             index: 1,
    //             value: '5',
    //             default: true
    //         }, {
    //             index: 2,
    //             value: '10',
    //             default: false
    //         }, {
    //             index: 3,
    //             value: '20',
    //         }, {
    //             index: -1,
    //             value: 'Todos',
    //         }],
    //         showPageSize: true,
    //         showPagination: true,
    //         showSearchBar: true,
    //         dataToShow: {
    //             title: 'Título de la tabla',
    //             sort: 'Name',
    //             showChecks: false,
    //             columns: [{
    //                 name: 'Name',
    //                 title: 'Nombre',
    //                 order: 1,
    //                 visible: true
    //             }, {
    //                 name: 'Surname',
    //                 title: 'Apellido',
    //                 order: 2,
    //                 visible: true
    //             }, {
    //                 name: 'Actions',
    //                 title: 'Acciones',
    //                 order: 3,
    //                 visible: true
    //             }],
    //             actions: [{
    //                 name: 'Confirm',
    //                 title: 'Confirmar',
    //                 icon: 'fas fa-check',
    //                 type: 'primary',
    //                 function: '',
    //                 visible: true
    //             }, {
    //                 name: 'Edit',
    //                 title: 'Editar',
    //                 icon: 'fas fa-edit',
    //                 type: 'primary',
    //                 function: self.editItem,
    //                 visible: true
    //             }, {
    //                 name: 'Delete',
    //                 title: 'Eliminar',
    //                 icon: 'fas fa-trash',
    //                 type: 'primary',
    //                 function: '',
    //                 visible: true
    //             }]
    //         }
    //     };
    // }

    // /* Configuración del form*/
    // function getFormConfig() {
    //     return {
    //         formTitle: 'Nuevo',
    //         icon: 'fas fa-plus-circle',
    //         fields: [{
    //             name: 'Name',
    //             title: 'Nombre',
    //             type: 'text',
    //             defaultValue: '',
    //             editable: true,
    //         }, {
    //             name: 'Surname',
    //             title: 'Apellido',
    //             type: 'text',
    //             defaultValue: '',
    //             editable: true,
    //         }],
    //         actions: [{
    //             function: self.saveItem,
    //             name: 'Save',
    //             title: 'Guardar',
    //             icon: 'fa fa-check',
    //             type: 'submit',
    //             link: '',
    //             class: 'btn green',
    //             visible: true
    //         }, {
    //             function: self.cancel,
    //             name: 'Cancel',
    //             title: 'Cancelar',
    //             icon: 'fas fa-ban',
    //             type: 'button',
    //             link: '',
    //             class: 'btn default',
    //             visible: true
    //         }]
    //     };
    // }
}