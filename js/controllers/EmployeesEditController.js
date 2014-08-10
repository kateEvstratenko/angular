angular.module('employeeApp').controller('EmployeesEditController', function ($scope, $routeParams, Employee) {
    $scope.employee = Employee.get({ id: $routeParams.id }, function (employee) {
        $scope.employee = employee;
    });

    $scope.save = function () {
        alert($scope.employee.firstName);
    }
});
