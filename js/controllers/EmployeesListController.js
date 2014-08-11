angular.module('employeeApp').controller('EmployeesListController', function ($scope, factory) {
    $scope.employees = factory.query({ collectionName: 'employees' });
    $scope.abilities = factory.query({ collectionName: 'abilities' });
});