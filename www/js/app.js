// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic','ionic.service.core', 'starter.controllers', 'starter.services'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    var push = new Ionic.Push({
      "debug": true
    });

    push.register(function(token) {
      console.log("Device token:",token.token);
    });
  });
})
.constant("CONFIG", {
  "api_url": "http://bw.dev/public/api"
})
.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

  .state('login', {
      url: '/login',
      templateUrl: 'templates/login.html',
      controller:'LoginCtrl'
  })

  .state('result', {
    url: '/result/:result',
    templateUrl: 'templates/result.html',
    controller: 'resultCtrl'
  })
  
  .state('ask', {
    url: '/ask',
    templateUrl: 'templates/ask.html',
    controller: 'askCtrl'
  })

  .state('tab', {
    url: '/tab',
    abstract: true,
    templateUrl: 'templates/tabs.html'
  })

  // Each tab has its own nav history stack:

  .state('tab.accueil', {
    url: '/accueil',
    views: {
      'tab-accueil': {
        templateUrl: 'templates/accueil.html',
      }
    }
  })
  .state('tab.activite', {
    url:'/activity',
    views: {
      'tab-activite': {
        templateUrl: 'templates/activite.html',
        controller: 'bestWesternCtrl'
      }
    }
  })
  .state('tab.favoris', {
    url: '/favoris',
    views: {
      'tab-favoris': {
        templateUrl: 'templates/favoris.html',
        controller: 'favorisCtrl'
      }
    }
  })

  .state('tab.historique', {
    url: '/historique',
    views: {
      'tab-historique': {
        templateUrl: 'templates/historique.html',
        controller: 'historiqueCtrl'
      }
    }
  })

  .state('tab.profile', {
    url: '/profile',
    views: {
      'tab-profile': {
        templateUrl: 'templates/profile.html',
        controller: 'profileCtrl'
      }
    }
  });
  // if none of the above states are matched, use this as the fallback
  //$urlRouterProvider.otherwise('/tab/dash');
    
  $urlRouterProvider.otherwise('/login');

});
