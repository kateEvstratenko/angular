/*angular.module('employeeApp').controller('EmployeesListController', function ($scope, route) {
    //$scope.employees = employees;
    $scope.employees = route.getData();
    $scope.employees.then(function (value) { $scope.employees = value; });
    alert($scope.employees[0]);
});*/

angular.module('employeeApp').controller('EmployeesListController', function($scope, employees) {
    $scope.employees = employees;
});