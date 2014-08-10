angular.module('employeeApp').controller('EmployeesDeleteController', function ($scope, $routeParams, $location, employeesFactory) {
    $scope.employee = employeesFactory.get({ id: $routeParams.id });

    $scope.delete = function() {
        employeesFactory.remove({id: $scope.employee._id.$oid});
        $location.path('/employees');
    }
});
