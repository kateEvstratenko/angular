angular.module('employeeApp').controller('EmployeesEditController', function ($scope, $routeParams, $location, factory) {
    $scope.employee = factory.get({collectionName: 'employees', id: $routeParams.id });//, function (employee) {
        //$scope.employee = employee;
    //});

    $scope.abilities = factory.query({ collectionName: 'abilities'});

    $scope.save = function() {
        factory.update({
            collectionName: 'employees',
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
