// First, declare your app as 
// an Angular.JS app
// Declare a var that goes into the
// global namespace and also use a 
// directive to tell it what app 
// your going to use

// MODULE:

var weatherApp = angular.module('weatherApp', ['ngRoute', 'ngResource']);

// Now you want to setup a SPA, with 
// routing to two different pages 
// (2 controllors, 2 html pages)

// CONTROLLERS:

weatherApp.controller('homeController', ['$scope', function ($scope) {

}]);

weatherApp.controller('forecastController', ['$scope', function ($scope) {

}]);

// ROUTES:

weatherApp.config(function ($routeProvider) {
    $routeProvider

    .when('/', {
        templateUrl: 'pages/home.html',
        controller: 'homeController'
    })

    .when('/forecast', {
        templateUrl: 'pages/forecast.html',
        controller: 'forecastController'
    });
});

// Don't forget to tell your View that your doing an SAP