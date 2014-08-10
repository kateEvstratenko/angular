angular.module('employeeApp').controller('EmployeesListController', function($scope, Employee) {
    $scope.employees = Employee.query();
});