(function () {
    'use strict';

    angular.module('employeeApp').controller('EmployeesCreateController', function ($scope, $location, Employee, Ability, $route, employeeAbilities) {
        $scope.employee = {
            firstName: '',
            lastName: '',
            department: '',
            abilities: []
        };

        $scope.abilities = $route.current.locals.abilities;

        $scope.save = function () {
            var abilities = $scope.employee.abilities;
            for (var i = 0; i < abilities.length; i++) {
                if (!abilities[i]._id) {
                    (function () {
                        var index = i;
                        var abilityForSave = new Ability(abilities[index]);
                        abilityForSave.$save();
                    })();
                }
            };

            $scope.employee.abilities = employeeAbilities.getChangedEmployeeAbilities($scope.employee.abilities);
            var employee = new Employee($scope.employee);

            employee.$save().then(function () {
                $location.path('/employees');
            });
        }

    });
})();
