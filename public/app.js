// First, declare your app as 
// an Angular.JS app
// Declare a var that goes into the
// global namespace and also use a 
// directive to tell it what app 
// your going to use

// MODULE:
var weatherApp = angular.module('weatherApp', ['ngRoute', 'ngResource']);

// you use the ngResource service to go get data off the internet

// Now you want to setup a SPA, with 
// routing to two different pages 
// (2 controllors, 2 html pages)

