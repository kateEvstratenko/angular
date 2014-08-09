/*angular.module('employeeApp').factory('route', function ($http, $q) {
    return {
        getData: function() {
            var deferred = $q.defer();

            $http.get({ method: 'GET', url: 'employees.json' })
                .success(function (data, status, headers, config) {
                    deferred.resolve(data);
                })
                .error(function(data, status, headers, config) {
                    deferred.reject(status);
                });

            return deferred.promise;
        }
    }
});*/

angular.module('employeeApp').factory('employees', function() {
    return [
        {
            id: '53e60bd686640d251270830c',
            firstName: 'Darla',
            lastName: 'Cox'
        },
        {
            id: '53e6223758ca73e8636cab03',
            firstName: 'Eddie',
            lastName: 'Mendez'
        },
        {
            id: '53e6223795bbe95d777edcba',
            firstName: 'Wilda',
            lastName: 'Blankenship'
        },
        {
            id: '53e622373c98f05e3cac14ac',
            firstName: 'Patton',
            lastName: 'Carter'
        },
        {
            id: '53e622377827521005ba0999',
            firstName: 'Esmeralda',
            lastName: 'Hensley'
        }
    ];
});