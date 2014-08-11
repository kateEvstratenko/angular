(function () {
    'use strict';

    angular.module('employeeApp').controller('EmployeesListController', function ($scope, Employee, Ability) {
        $scope.employees = Employee.query();
        $scope.abilities = Ability.query();

        $scope.delete = function (employeeForDelete) {
            var employee = new Employee(employeeForDelete);
            employee.$remove({ id: employee._id.$oid });

            $scope.employees.splice($scope.employees.indexOf(employee), 1);
        }
    });

})();