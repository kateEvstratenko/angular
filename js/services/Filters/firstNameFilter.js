﻿(function () {
    'use strict';

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

})();