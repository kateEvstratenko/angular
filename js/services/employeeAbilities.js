(function() {
    'use strict';

    angular.module('employeeApp').service('employeeAbilities',
        function() {
            var getChangedEmployeeAbilities = function(abilities) {
                var changedAbilities = [];
                for (var i = 0; i < abilities.length; i++) {
                    changedAbilities.push({
                        name: abilities[i].name,
                        _id: new Object()
                    });
                }
                return changedAbilities;
            };

            return {
                getChangedEmployeeAbilities: getChangedEmployeeAbilities
            };
        });
})();