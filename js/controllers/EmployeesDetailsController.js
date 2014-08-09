angular.module('employeeApp').controller('EmployeesDetailsController', function ($scope, $routeParams) {
    $scope.employee_id = $routeParams.id;
});
