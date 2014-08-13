(function () {
    'use strict';

    angular.module('employeeApp').controller('EmployeesCreateController', function ($scope, $location, Employee, Ability, $route) {
        $scope.employee = {
            firstName: '',
            lastName: '',
            department: '',
            abilities: []
        };

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

            $scope.employee.abilities = getEmployeeAbilities();
            var employee = new Employee($scope.employee);

            employee.$save().then(function () {
                $location.path('/employees');
            });
        }

        var getEmployeeAbilities = function () {
            var abilities = [];
            for (var i = 0; i < $scope.employee.abilities.length; i++) {
                abilities.push({
                    name: $scope.employee.abilities[i].name,
                    _id : new Object()
                });
            }
            return abilities;
        };
    });
})();
