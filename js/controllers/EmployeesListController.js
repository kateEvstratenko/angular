(function () {
    'use strict';

    angular.module('employeeApp').controller('EmployeesListController', function ($scope, $location, Employee, Ability) {
        $scope.employees = Employee.query();
        $scope.abilities = Ability.query();

        $scope.delete = function (employeeForDelete) {
            $scope.employees.splice($scope.employees.indexOf(employeeForDelete), 1);

            var employee = new Employee(employeeForDelete);
            employee.$remove({ id: employee._id.$oid });
        }
    });

})();