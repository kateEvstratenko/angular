angular.module('employeeApp').controller('EmployeesDetailsController', function ($scope, $routeParams, employeesFactory) {
    $scope.employee = employeesFactory.get({ collectionName: 'employeesList', id: $routeParams.id });
});
