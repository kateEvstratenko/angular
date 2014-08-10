var employeeServices = angular.module('employeeServices', ['ngResource']);

employeeServices.factory('Employee', 
    function($resource) {
        return $resource('employees/:id.json', {}, {
            query: { method: 'GET', params: { id: 'employees' }, isArray: true }
        });
    });
