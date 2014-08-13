(function () {
    'use strict';

    angular.module('employeeApp').filter('abilitiesFilter', function () {
        return function (items, abilities) {

            if (!abilities) {
                return items;
            }

            var arrayToReturn = [];
            for (var i = 0; i < items.length; i++) {
                var toAdd = true;

                for (var j = 0; j < abilities.length; j++) {
                    var thereIs = false;

                    for (var k = 0; k < items[i].abilities.length; k++) {
                        if (items[i].abilities[k].name.indexOf(abilities[j]) > -1) {
                            thereIs = true;
                            break;
                        }
                    }
                    if (!thereIs) {
                        toAdd = false;
                    }
                }

                if (toAdd) {
                    arrayToReturn.push(items[i]);
                }
            }

            return arrayToReturn;
        }
    });

})();