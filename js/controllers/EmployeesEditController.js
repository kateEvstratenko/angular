angular.module('employeeApp').controller('EmployeesEditController', function ($scope, $routeParams, $location, employeesFactory) {
    $scope.employee = employeesFactory.get({collectionName: 'employeesList', id: $routeParams.id });//, function (employee) {
        //$scope.employee = employee;
    //});

    $scope.abilities = employeesFactory.query({ collectionName: 'abilities'});

    $scope.save = function() {
        employeesFactory.update({
            collectionName: 'employeesList',
            id: $scope.employee._id.$oid
            },{
                firstName: $scope.employee.firstName,
                lastName: $scope.employee.lastName,
                department: $scope.employee.department,
                abilities: $scope.employee.abilities
            }
        );
        $location.path('/employees');
    }
});
