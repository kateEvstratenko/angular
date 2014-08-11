angular.module('employeeApp').filter('departmentFilter', function () {
    return function (items, department) {

        if (!department) {
            return items;
        }

        var arrayToReturn = [];
        for (var i = 0; i < items.length; i++) {
            if (items[i].department == department) {
                arrayToReturn.push(items[i]);
            }
        }

        return arrayToReturn;
    }
});