angular.module('employeeApp').controller('EmployeesCreateController', function ($scope, $location, Employee, Ability) {
    $scope.employee = {
        firstName: '',
        lastName: '',
        department: 1
    };

    $scope.abilities = Ability.query();

    $scope.save = function () {
        var employee = new Employee($scope.employee);

        employee.$save().then(function () {
            $location.path('/employees');
        });
    }
});
