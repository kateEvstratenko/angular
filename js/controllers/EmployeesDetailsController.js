angular.module('employeeApp').controller('EmployeesDetailsController', function ($scope, $routeParams, factory) {
    $scope.employee = factory.get({ collectionName: 'employees', id: $routeParams.id });
});
