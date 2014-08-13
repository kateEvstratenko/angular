(function () {
    'use strict';

    angular.module('employeeApp').controller('EmployeesEditController', function ($scope, $location, Employee, Ability, $route, employeeAbilities) {
        $scope.employee = $route.current.locals.employee;

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

            Employee.update({ id: $scope.employee._id.$oid }, {
                firstName: $scope.employee.firstName,
                lastName: $scope.employee.lastName,
                department: $scope.employee.department,
                abilities: employeeAbilities.getChangedEmployeeAbilities($scope.employee.abilities)
            }).$promise.then(function () {
                $location.path('/employees');
            });
        }

    });
})();
