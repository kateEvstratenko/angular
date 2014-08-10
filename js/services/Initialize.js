angular.module('employeeApp', ['ngRoute', 'employeeServices'])
    .config(['$routeProvider', 
        function ($routeProvider) {

            //$routeProvider.defaults.stripTrailingSlashes = false;

            $routeProvider.when('/employees', {
                controller: 'EmployeesListController',
                templateUrl: 'employeesList.html'
            });

            $routeProvider.when('/employees/:id', {
                controller: 'EmployeesDetailsController',
                templateUrl: 'details.html',
            });

            $routeProvider.when('/employees/:id/edit', {
                controller: 'EmployeesEditController',
                templateUrl: 'edit.html',
            });

            $routeProvider.when('/employees/:id/delete', {
                controller: 'EmployeesDeleteController',
                templateUrl: 'delete.html',
            });

            $routeProvider.when('/create', {
                controller: 'EmployeesCreateController',
                templateUrl: 'create.html',
            });
        
            $routeProvider.otherwise({
                redirectTo: '/employees'
            });
    }]
);
