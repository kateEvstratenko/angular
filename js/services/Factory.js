var employeeServices = angular.module('employeeServices', ['ngResource']);

employeeServices.factory('Employee', 
    function($resource) {
        return $resource('https://api.mongolab.com/api/1/databases/employees/collections/employeesList/:id?apiKey=z_XFimRxC0qOIzEN8UyZu37oG3rr-AAH', {}, {
            query: { method: 'GET', params: {}, isArray: true },
            save: { method: 'POST' },
            update: { method: 'PUT' },
            get: { method: 'GET', isArray: false }
        });
    });
