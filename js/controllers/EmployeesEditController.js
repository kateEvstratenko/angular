angular.module('employeeApp').controller('EmployeesEditController', function ($scope, $routeParams, $location, employeesFactory) {
    $scope.employee = employeesFactory.get({ id: $routeParams.id });//, function (employee) {
        //$scope.employee = employee;
    //});

    $scope.save = function() {
        employeesFactory.update({
                id: $scope.employee._id.$oid
            },{
                firstName: $scope.employee.firstName,
                lastName: $scope.employee.lastName,
                department: $scope.employee.department
            }
        );
        $location.path('/employees');
    }
});
