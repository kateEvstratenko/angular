angular.module('employeeApp').controller('EmployeesListController', function ($scope, employeesFactory) {
    $scope.employees = employeesFactory.query({ collectionName: 'employeesList' });
    $scope.abilities = employeesFactory.query({ collectionName: 'abilities' });
});