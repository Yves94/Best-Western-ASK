angular.module('starter.controllers', [])

.controller('bestWesternCtrl', function($scope,ActivityFactory) {
    // recupere toutes les activitées et les set dans scope
    ActivityFactory.getAll($scope);
})

.controller('favorisCtrl', function($scope) {})

.controller('historiqueCtrl', function($scope) {})

.controller('profileCtrl', function($scope) {})

// Controler
.controller('LoginCtrl', function($scope, LoginService, $ionicPopup, $state) {
    $scope.data = {};
 
    $scope.login = function() {

      //Appel du service LoginService
        LoginService.loginUser($scope.data.username, $scope.data.password).then(function(data) {
            if(data.status != "error") {
                $state.go('tab.accueil');
            } else {
                var alertPopup = $ionicPopup.alert({
                    title: 'Mauvais identifiant',
                    template: 'Vérifier vos informations'
                });
            }
        })
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
