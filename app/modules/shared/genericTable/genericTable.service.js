angular
    .module('sharedModule')
    .factory('genericTableService', [
        function () {

            var reverse = false;

            return {
                getDataToShow(data, property) {
                    var result = '';
                    if (data != undefined || data != null) {
                        result = data[property];
                    }
                    return result;
                },

                // sortBy(data, property) {
                //     data.sort = (data.sort === property) ? !reverse : false;
                //     data.sort = property;
                // }
            };
        }
    ]);