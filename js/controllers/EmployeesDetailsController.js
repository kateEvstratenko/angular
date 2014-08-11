(function () {
    'use strict';

    angular.module('employeeApp').controller('EmployeesDetailsController', function ($scope, $routeParams, Employee) {
        $scope.employee = Employee.get({ id: $routeParams.id });
    });
})();
