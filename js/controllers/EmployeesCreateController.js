var guid = (function () {
    function s4() {
        return Math.floor((1 + Math.random()) * 0x10000)
                   .toString(16)
                   .substring(1);
    }
    return function () {
        return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
               s4() + '-' + s4() + s4() + s4();
    };
})();

angular.module('employeeApp').controller('EmployeesCreateController', function ($scope, $location, employeesFactory) {
    $scope.employee = {
        firstName: '',
        lastName: '',
        department: 1
    };

    $scope.abilities = employeesFactory.query({ collectionName: 'abilities'});

    $scope.save = function () {
        employeesFactory.save({collectionName: 'employeesList'}, $scope.employee);
        $location.path('/employees');
    }
});
