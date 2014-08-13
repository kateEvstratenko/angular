(function () {
    'use strict';

    angular.module('employeeApp').controller('EmployeesEditController', function ($scope, $location, Employee, Ability, $route) {
        $scope.employee = $route.current.locals.employee;

        $scope.abilities = $route.current.locals.abilities;

        $scope.save = function () {
            var len = $scope.employee.abilities.length;
            var isEmployeeUpdated = false;
            for (var i = 0; i < len; i++) {
                if (!$scope.employee.abilities[i]._id) {
                    (function () {
                        var index = i;
                        var abilityForSave = new Ability($scope.employee.abilities[index]);
                        abilityForSave.$save().then(function () {
                            $scope.employee.abilities[index]._id = abilityForSave._id;
                            isEmployeeUpdated = true;
                            updateEmployee();
                        });
                    })();
                }
            };
            if (!isEmployeeUpdated) {
                updateEmployee();
            }
        }

        var updateEmployee = function () {
            Employee.update({ id: $scope.employee._id.$oid }, {
                firstName: $scope.employee.firstName,
                lastName: $scope.employee.lastName,
                department: $scope.employee.department,
                abilities: $scope.employee.abilities
            }).$promise.then(function () {
                $location.path('/employees');
            });
        }

        $scope.addAbility = function () {
            var newAbility = { name: $scope.newAbilityName };
            var abilityForSave = new Ability(newAbility);
            abilityForSave.$save().then(function () {
                //$scope.abilities = $route.current.locals.abilities;
                var n = Ability.get({ id: abilityForSave._id.$oid }).$promise;
                n.then(function () {
                    $scope.employee.abilities.push(n);
                });

            });
        };


        $scope.loadAbilities = function(query) {
            return $scope.abilities.$promise;
        };
    });
})();
