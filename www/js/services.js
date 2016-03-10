angular.module('starter.services', ['ngResource'])

.service('LoginService', function($q) {
    return {
        loginUser: function(name, pw) {
            var deferred = $q.defer();
            
            var promise = deferred.promise;
            //TODO REQUETE SQL CHECK IDENTIFIANTS 
            if (name == 'test' && pw == 'test') {
              //Lance l'éxécution done 
                deferred.resolve('Bienvenu' + name + ' dans B.W\'Ask');
            } else {
              //Lance l'éxécution fail
                deferred.reject('Mauvais identifiant');
            }
            
            promise.success = function(fn) {
                promise.then(fn);
                return promise;
            }
            promise.error = function(fn) {
                promise.then(null, fn);
                return promise;
            }
    
            return promise;
        }
    }
})

.factory('ActivityFactory', function($resource, $http) {
    return {
        getAll: function($scope) {
            $http.get('http://bw.dev/api/activity/getall').then(function(data) {
                if (typeof data.data.activities != 'undefined') {
                    $.each(data.data.activities, function(index, value){
                        console.log(value.title_en);
                    });
                    $scope.activities = data.data.activities;
                }
            });
        }
    };
})

.factory('FavorisFactory', function($resource, $http) {
    return {
        getAll: function($scope) {
            $http.get('http://bw.dev/api/favoris/getall').then(function(data) {
                if (typeof data.data.favoris != 'undefined') {
                    $.each(data.data.favoris, function(index, value){
                        console.log(value.title);
                    });
                    $scope.favoris = data.data.favoris;
                }
            });
        }
    };
});
