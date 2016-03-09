angular.module('starter.services', [])


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
         
            //return promise;
            return promise;
        }
    }
});
