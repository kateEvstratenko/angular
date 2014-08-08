
angular.module('employeeApp', ['ngRoute'])
    .config(function ($routeProvider) {

        $routeProvider.when('/employees/:id', {
            controller: 'EmployeesDetailsController',
            templateUrl: 'details.html'
        });

        $routeProvider.when('/employees', {
            controller: 'EmployeesListController',
            templateUrl: 'employeesList.html'
        });
        
        $routeProvider.otherwise({
            redirectTo: '/employees'
        });
    }
);

//другой файл
angular.module('employeeApp').factory('employees', function() {
    var employees = [{
        firstName: 'qwerty',
        lastName: 'asdfgh',
        id: 1
    }, {
        firstName: 'tyu',
        lastName: 'jhk',
        id: 2
    }];

    return employees;
});

angular.module('employeeApp').controller('EmployeesDetailsController', function ($scope, $routeParams) {
    $scope.employee_id = $routeParams.id;
});

angular.module('employeeApp').controller('EmployeesListController', function ($scope, employees){
    $scope.employees = employees;
});


