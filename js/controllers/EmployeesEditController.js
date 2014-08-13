(function () {
    'use strict';

    angular.module('employeeApp').controller('EmployeesEditController', function ($scope, $location, Employee, Ability, $route) {
        $scope.employee = $route.current.locals.employee;

        $scope.abilities = $route.current.locals.abilities;

        $scope.save = function () {
            var len = $scope.employee.abilities.length;
            for (var i = 0; i < len; i++) {
                if (!$scope.employee.abilities[i]._id) {
                    (function () {
                        var index = i;
                        var abilityForSave = new Ability($scope.employee.abilities[index]);
                        abilityForSave.$save();
                    })();
                }
            };

            Employee.update({ id: $scope.employee._id.$oid }, {
                firstName: $scope.employee.firstName,
                lastName: $scope.employee.lastName,
                department: $scope.employee.department,
                abilities: getEmployeeAbilities()
            }).$promise.then(function () {
                $location.path('/employees');
            });
        }

        var getEmployeeAbilities = function () {
            var abilities = [];
            for (var i = 0; i < $scope.employee.abilities.length; i++) {
                abilities.push({
                    name: $scope.employee.abilities[i].name,
                    _id: new Object()
                });
            }
            return abilities;
        };
    });
})();
