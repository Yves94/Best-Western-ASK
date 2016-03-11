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
            $http.get(CONFIG.api_url + '/favorite/get/1').then(function(data) {
                if (typeof data.data != 'undefined') {
                    $scope.allFavoris = data.data;
                }
            });
        }
    };
})

.factory('BookingFactory', function($resource, $http, CONFIG) {
    return {
        getAll: function($scope) {
            $http.get(CONFIG.api_url + '/booking/getbyuser/1').then(function(data) {
                if (typeof data.data != 'undefined') {
                    $scope.allRegister = data.data;
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
                    console.log(data.data['activities']);
                    $scope.activities = data.data['activities'];
                    $scope.activity = $scope.activities[0];
                    $scope.activityIndex = 0;
                    console.log($scope.activity);
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
