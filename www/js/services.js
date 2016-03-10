angular.module('starter.services', ['ngResource'])


.service('LoginService', function($q,$http,CONFIG) {
    return {
        loginUser: function(name, pw) {
            var def = $q.defer();
            $http.post(CONFIG.api_url+'/user/connect', {'id':name,password:pw})
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

    .factory('ActivityFactory', function($resource,$http,CONFIG) {
        return {

            getAll: function($scope) {
                /*var r =  $resource('http://localhost:8000/api/activity/getall');
                return r.get()
                    .$promise.then(function(data) {
                        console.log(data.activities);
                    });*/
                $http.get(CONFIG.api_url+'/activity/getall').then(function(data) {

                    if (typeof data.data.activities != 'undefined') {
                        /*$.each(data.data.activities, function(index, value){
                            console.log(value.title_en);
                        });*/
                        $scope.activities = data.data.activities;
                    }
                });
            }
        };

    })
    .factory('HotelFactory', function($resource,$http,CONFIG) {
        return {
            getAll: function($scope) {
                $http.get(CONFIG.api_url+'/hotel/getall').then(function(data) {
                    if (typeof data.data.hotels != 'undefined') {
                        $scope.hotels = data.data.activities;
                    }
                });
            }
        };
    })

;
