angular
    .module('sharedModule')
    .component('genericTableComponent', {
        templateUrl: 'app/modules/shared/genericTable/genericTable.template.html',
        controller: [
            '$scope', '$filter',
            'genericTableService',
            genericTableComponentController
        ],
        bindings: {
            data: '<',
            config: '<'
        },
        controllerAs: 'tableCtrl',
        css: 'app/modules/shared/genericTable/genericTable.css'
    });

function genericTableComponentController($scope, $filter, genericTableService) {
    var self = this;

    self.reverse = false;
    self.column = '';
    self.checked = false;
    self.query = null;

    self.filteredItems = [];
    self.selectedPageSize = null;
    self.currentPage = 1;
    self.itemsPerPage = 50;
    self.totalItems = 0;

    self.$onInit = function () {
        self.column = self.config.dataToShow.sort;
        self.selectedPageSize = _.find(self.config.pagination, ['default', true]);
        self.itemsPerPage = isNaN(parseInt(self.selectedPageSize.value)) ? 20 : parseInt(self.selectedPageSize.value);
    };

    self.$onChanges = function (changes) {
        if (angular.isDefined(changes.data.currentValue)) {
            self.filteredItems = self.data;
            self.enablePagination();
        }
    };

    self.getData = (data, property) => {
        return genericTableService.getDataToShow(data, property);
    };

    self.sortBy = (column) => {
        self.column = column;
        self.reverse = !self.reverse; 
    };

    self.checkAll = () => {
        self.checked = !self.checked;
    };

    self.enablePagination = () => {
        self.totalItems = self.data.length;

        if (self.selectedPageSize) {
            self.itemsPerPage = parseInt(self.selectedPageSize.value);
        } else {
            self.itemsPerPage = self.data.length;
        } 
        self.setPagingData();
    };

    self.setPagingData = () => {
        var sortedArray = _.orderBy(self.data, [self.column], [self.reverse ? 'desc' : 'asc']);
        var pagedData = sortedArray.slice((self.currentPage - 1) * self.itemsPerPage, self.currentPage * self.itemsPerPage);
        self.filteredItems = pagedData;
    };

    self.setPageSize = () => {
        self.itemsPerPage = isNaN(parseInt(self.selectedPageSize.value)) ? self.data.length : parseInt(self.selectedPageSize.value);
        self.setPagingData();
    };

    self.getIcon = (column) => {
        if (column == self.column) {
            return self.reverse ? 'fa-chevron-up' : 'fa-chevron-down';
        }
        return '';
    };

    self.clearSearch = () => {
        self.query = undefined;
    };

    self.getTotalItemsOnPage = () => {
        if (self.filteredItems) {
            var result = self.filteredItems.length - ((self.currentPage - 1) * self.itemsPerPage);
            return result >= self.itemsPerPage ? self.itemsPerPage : result;
        } else {
            return self.itemsPerPage;
        }
    };
}



