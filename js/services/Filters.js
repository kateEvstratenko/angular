angular.module('employeeApp').filter('firstNameFilter', function () {
    return function (items, firstName) {

        if (!firstName) {
            return items;
        }

        var arrayToReturn = [];
        for (var i = 0; i < items.length; i++) {
            if (items[i].firstName.toLowerCase().indexOf(firstName.toLowerCase()) > -1) {
                arrayToReturn.push(items[i]);
            }
        }

        return arrayToReturn;
    }
});

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

angular.module('employeeApp').filter('abilitiesFilter', function () {
    return function (items, abilities) {

        if (!abilities) {
            return items;
        }

        var arrayToReturn = [];
        for (var i = 0; i < items.length; i++) {
            var toAdd = true;

            for (var j = 0; j < abilities.length; j++) {
                if (items[i].abilities.indexOf(abilities[j]) < 0) {
                    toAdd = false;
                    break;
                }
            }

            if (toAdd) {
                arrayToReturn.push(items[i]);
            }
        }

        return arrayToReturn;
    }
});