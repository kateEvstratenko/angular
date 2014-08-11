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
                    console.log((abilities[j]).length);
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