angular.module('starter.controllers', [])

.controller('bestWesternCtrl', function($scope) {
  console.log('ok');
  $http.get('http://localhost:8100/accueil').then(function(resp) {
    console.log('Success', resp);
    // For JSON responses, resp.data contains the result
  }, function(err) {
    console.error('ERR', err);
    // err.status will contain the status code
  })

.controller('bestWesternCtrl', function($scope,ActivityFactory) {
     $scope.activities = ActivityFactory.getAll();
    console.log(ActivityFactory.getAll());

})

.controller('favorisCtrl', function($scope) {})

.controller('historiqueCtrl', function($scope) {})

.controller('profileCtrl', function($scope) {})

// Controler
.controller('LoginCtrl', function($scope, LoginService, $ionicPopup, $state) {
    $scope.data = {};
 
    $scope.login = function() {

      //Appel du service LoginService
        LoginService.loginUser($scope.data.username, $scope.data.password).success(function(data) {
          //Les identifiants sont correctes
            $state.go('tab.accueil');
        }).error(function(data) {
          //les identifiants sont incorrectes
            var alertPopup = $ionicPopup.alert({
                title: 'Mauvais identifiant',
                template: 'Vérifier vos informations'
            });
        });
    }
})

.controller('askCtrl', function($scope, $state){
  $scope.search = function(result){
    $state.go('result',{result:result})
  }
})

.controller('resultCtrl', function($scope, $stateParams){
    $scope.result = $stateParams.result
});
