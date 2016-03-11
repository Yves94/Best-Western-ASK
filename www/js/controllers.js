angular.module('starter.controllers', [])

.controller('bestWesternCtrl', function($scope,ActivityFactory,$http,CONFIG,$ionicPopup) {
    // recupere toutes les activitées et les set dans scope
    ActivityFactory.getAll($scope);
    $scope.passer = function() {
        // Prendre l'ID suivant (activité)
        $scope.activityIndex = $scope.activityIndex + 1;
        //console.log($scope.activityIndex);
        $scope.activity = $scope.activities[$scope.activityIndex];
        console.log($scope.activity);

    }
    $scope.datepickerObject = {
        titleLabel: 'Title',  //Optional
        todayLabel: 'Today',  //Optional
        closeLabel: 'Close',  //Optional
        setLabel: 'Set',  //Optional
        setButtonType : 'button-assertive',  //Optional
        todayButtonType : 'button-assertive',  //Optional
        closeButtonType : 'button-assertive',  //Optional
        inputDate: new Date(),  //Optional
        mondayFirst: true,  //Optional
        //disabledDates: disabledDates, //Optional
        //weekDaysList: weekDaysList, //Optional
        //monthList: monthList, //Optional
        templateType: 'popup', //Optional
        showTodayButton: 'true', //Optional
        modalHeaderColor: 'bar-positive', //Optional
        modalFooterColor: 'bar-positive', //Optional
        from: new Date(2012, 8, 2), //Optional
        to: new Date(2018, 8, 25),  //Optional
        callback: function (val) {  //Mandatory
            //datePickerCallback(val);
            $scope.reserver(val);
        },
        dateFormat: 'yyyy-MM-dd', //Optional
        closeOnSelect: false, //Optional
    }
    $scope.reserver = function(val) {

        var yyyy = val.getFullYear().toString();
        var mm = (val.getMonth()+1).toString(); // getMonth() is zero-based
        var dd  = val.getDate().toString();
        var date =  yyyy +"-"+ (mm[1]?mm:"0"+mm[0]) +"-"+ (dd[1]?dd:"0"+dd[0]); // padding
        $http.post(CONFIG.api_url + '/booking/add', {id_user: 1, id_activity: $scope.activity.id_activity, schedule_booking:date}).success(function(data, status) {
            $ionicPopup.alert({
                title:'Booking',
                template:'Booking complete'
            });
        });

    }
})

.controller('favorisCtrl', function($scope, FavorisFactory) {
    FavorisFactory.getAll($scope);
})

.controller('bookingCtrl', function($scope, BookingFactory) {
    BookingFactory.getAll($scope);
})

.controller('btnActionCtrl', function($scope, $http, CONFIG) {
    $scope.passer = function() {
        // Prendre l'ID suivant (activité)
        $scope.activityIndex = $scope.activityIndex + 1;
        $scope.activity = $scope.activities[$scope.activityIndex];
        console.log($scope.activity);

    }

    $scope.favoris = function() {
        $http.post(CONFIG.api_url + '/favorite/add', {id_user: 1, id_activity: $scope.activity.id_activity}).success(function(data, status) {
            console.log('OK SEND');
        })
    }

    $scope.reserver = function() {
        // Afficher un calendrier
    }
})

.controller('historiqueCtrl', function($scope) {})

.controller('profileCtrl', function($scope) {})

// Controler
.controller('LoginCtrl', function($scope, LoginService, $ionicPopup, $state) {
    $scope.data = {};
 
    $scope.login = function() {

      //Appel du service LoginService
        LoginService.loginUser($scope.data.username, $scope.data.password).then(function(data) {
            if(data.status != "error") {
                $scope.user = data;
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
