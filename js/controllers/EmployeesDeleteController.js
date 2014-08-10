angular.module('employeeApp').controller('EmployeesDeleteController', function ($scope, $routeParams, $location, employeesFactory) {
    $scope.employee = employeesFactory.get({collectionName: 'employeesList', id: $routeParams.id });

    $scope.delete = function() {
        employeesFactory.remove({collectionName: 'employeesList', id: $scope.employee._id.$oid});
        $location.path('/employees');
    }
});
