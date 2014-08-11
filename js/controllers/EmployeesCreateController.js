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

angular.module('employeeApp').controller('EmployeesCreateController', function ($scope, $location, factory) {
    $scope.employee = {
        firstName: '',
        lastName: '',
        department: 1
    };

    $scope.abilities = factory.query({ collectionName: 'abilities' });

    $scope.save = function () {
        factory.save({ collectionName: 'employees' }, $scope.employee);
        $location.path('/employees');
    }
});
