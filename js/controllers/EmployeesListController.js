angular.module('employeeApp').controller('EmployeesListController', function ($scope, employeesFactory) {
    $scope.employees = employeesFactory.query();
});