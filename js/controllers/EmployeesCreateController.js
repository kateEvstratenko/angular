var guid = (function() {
    function s4() {
        return Math.floor((1 + Math.random()) * 0x10000)
                   .toString(16)
                   .substring(1);
    }
    return function() {
        return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
               s4() + '-' + s4() + s4() + s4();
    };
})();

angular.module('employeeApp').controller('EmployeesCreateController', function ($scope) {
    $scope.employee = {
        firstName: '',
        lastName: '',
        id: guid(),
        department: 1
    };

    $scope.save = function(employee) {
        alert(employee.firstName);
    }
});
