(function () {
    'use strict';

    angular.module('employeeApp').controller('EmployeesEditController', function ($scope, $routeParams, $location, Employee, Ability) {
        $scope.employee = Employee.get({ id: $routeParams.id });

        $scope.abilities = Ability.query();

        $scope.save = function () {
            Employee.update({ id: $scope.employee._id.$oid }, {
                firstName: $scope.employee.firstName,
                lastName: $scope.employee.lastName,
                department: $scope.employee.department,
                abilities: $scope.employee.abilities
            }).$promise.then(function () {
                $location.path('/employees');
            });
        }
    });

})();
