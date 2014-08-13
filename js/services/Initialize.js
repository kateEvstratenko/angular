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
                        employee: function(Employee, $route) {
                             return Employee.get({ id: $route.current.params.id }).$promise;
                        },
                        abilities: function(Ability) {
                             return Ability.query().$promise;
                        }
                    }
                });
                
                $routeProvider.when('/create', {
                    controller: 'EmployeesCreateController',
                    templateUrl: 'views/create.html'
                });

                $routeProvider.otherwise({
                    redirectTo: '/employees'
                });
            }]
    );

    angular.module('employeeApp').directive('tagDirective', function($q) {

        link: (function(scope) {
            scope.loadAbilities = function() {
                return {name: 'qwerty'}; //Ability.query().$promise;
              /*  var deferred = $q.defer();
                deferred.resolve([{ text: 'Tag9' },{ text: 'Tag10' }]);
                return deferred.promise;*/
            }

        });
    });


})();
