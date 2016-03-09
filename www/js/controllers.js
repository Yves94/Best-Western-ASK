angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {})

.controller('ChatsCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})
// Controler
.controller('LoginCtrl', function($scope, LoginService, $ionicPopup, $state) {
    $scope.data = {};
 
    $scope.login = function() {

      //Appel du service LoginService
        LoginService.loginUser($scope.data.username, $scope.data.password).success(function(data) {
          //Les identifiants sont correctes
            $state.go('tab.dash');
        }).error(function(data) {
          //les identifiants sont incorrectes
            var alertPopup = $ionicPopup.alert({
                title: 'Mauvais identifiant',
                template: 'Vérifier vos informations'
            });
        });
    }
})
.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
})

.controller('askCtrl', function($scope, $state){
  $scope.search = function(result){
    $state.go('result',{result:result})
  }
})

.controller('resultCtrl', function($scope, $stateParams){
    $scope.result = $stateParams.result
});
