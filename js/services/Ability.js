angular.module('employeeApp').factory('Ability',
    function ($resource) {
        return $resource('https://api.mongolab.com/api/1/databases/employees/collections/abilities' + '/:id?apiKey=z_XFimRxC0qOIzEN8UyZu37oG3rr-AAH', {}, {
            get: { method: 'GET', isArray: false },
            query: { method: 'GET', params: {}, isArray: true },
            save: { method: 'POST' },
            update: { method: 'PUT' },
            remove: { method: 'DELETE' }
        });
    });
