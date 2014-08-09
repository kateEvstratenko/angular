angular.module('employeeApp', ['ngRoute'])
    .config(function ($routeProvider) {

        $routeProvider.when('/employees/:id', {
            controller: 'EmployeesDetailsController',
            templateUrl: 'details.html',
        });

        $routeProvider.when('/', {
            controller: 'EmployeesListController',
            templateUrl: 'employeesList.html'
        });
        
        $routeProvider.otherwise({
            redirectTo: '/'
        });
    }
);
