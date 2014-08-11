angular.module('employeeApp', ['ngRoute', 'ngResource'])
    .config(['$routeProvider', 
        function ($routeProvider) {

            $routeProvider.when('/employees', {
                controller: 'EmployeesListController',
                templateUrl: 'views/employeesList.html'
            });

            $routeProvider.when('/employees/:id', {
                controller: 'EmployeesDetailsController',
                templateUrl: 'views/details.html',
            });

            $routeProvider.when('/employees/:id/edit', {
                controller: 'EmployeesEditController',
                templateUrl: 'views/edit.html',
            });

            $routeProvider.when('/create', {
                controller: 'EmployeesCreateController',
                templateUrl: 'views/create.html',
            });
        
            $routeProvider.otherwise({
                redirectTo: '/employees'
            });
    }]
);
