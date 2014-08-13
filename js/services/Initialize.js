(function () {
    'use strict';

    angular.module('employeeApp', ['ngRoute', 'ngResource', 'ngTagsInput'])
        .config(['$routeProvider',
            function ($routeProvider) {

                $routeProvider.when('/employees', {
                    controller: 'EmployeesListController',
                    templateUrl: 'views/employeesList.html'
                });

                $routeProvider.when('/employees/:id', {
                    controller: 'EmployeesDetailsController',
                    templateUrl: 'views/details.html'
                });

                $routeProvider.when('/employees/:id/edit', {
                    controller: 'EmployeesEditController',
                    templateUrl: 'views/edit.html',
                    resolve: {
                        employee: function (Employee, $route) {
                            return Employee.get({ id: $route.current.params.id }).$promise;
                        },
                        abilities: function (Ability) {
                            return Ability.query();
                        }
                    }
                });

                $routeProvider.when('/create', {
                    controller: 'EmployeesCreateController',
                    templateUrl: 'views/create.html',
                    resolve: {
                        abilities: function (Ability) {
                            return Ability.query();
                        }
                    }
                });

                $routeProvider.otherwise({
                    redirectTo: '/employees'
                });
            }]
    );
})();
