angular.module('employeeApp').filter('lastNameFilter', function () {
    return function (items, lastName) {

        if (!lastName) {
            return items;
        }

        var arrayToReturn = [];
        for (var i = 0; i < items.length; i++) {
            if (items[i].lastName.toLowerCase().indexOf(lastName.toLowerCase()) > -1) {
                arrayToReturn.push(items[i]);
            }
        }

        return arrayToReturn;
    }
});