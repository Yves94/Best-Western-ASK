angular.module('starter.services', ['ngResource'])

.service('LoginService', function($q, $http, CONFIG) {
    return {
        loginUser: function(name, pw) {
            var def = $q.defer();
            $http.post(CONFIG.api_url + '/user/connect', {'id':name,password:pw})
                .success(function(data) {
                    def.resolve(data);
                })
                .error(function() {
                    def.reject("Failed request http loginservice");
                });
            return def.promise;
        }
    }
})

.factory('FavorisFactory', function($resource, $http, CONFIG) {
    return {
        getAll: function($scope) {
            $http.get(CONFIG.api_url + '/favoris/getall').then(function(data) {
                if (typeof data.data.favoris != 'undefined') {
                    $scope.favoris = data.data.favoris;
                }
            });
        }
    };
})

.factory('ActivityFactory', function($resource, $http, CONFIG) {
    return {
        getAll: function($scope) {
            $http.get(CONFIG.api_url + '/activity/getall').then(function(data) {
                if (typeof data.data.activities != 'undefined') {
                    $scope.activities = data.data.activities;
                }
            });
        }
    };
})

.factory('HotelFactory', function($resource, $http, CONFIG) {
    return {
        getAll: function($scope) {
            $http.get(CONFIG.api_url + '/hotel/getall').then(function(data) {
                if (typeof data.data.hotels != 'undefined') {
                    $scope.hotels = data.data.activities;
                }
            });
        }
    };
});
