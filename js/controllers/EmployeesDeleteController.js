angular.module('employeeApp').controller('EmployeesDeleteController', function ($scope, $routeParams, $location, factory) {
    $scope.employee = factory.get({ collectionName: 'employees', id: $routeParams.id });

    $scope.delete = function() {
        factory.remove({collectionName: 'employees', id: $scope.employee._id.$oid});
        $location.path('/employees');
    }
});
