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
    })

// Below, we're making a new route where we can actually specify
// how many days we want returned in our results through the url
    .when('/forecast/:days', {
// How do you get the ':days' when your looking at it in your controller?
// Inject it as another service in the controller, it's called "$routeParams"
        templateUrl: 'pages/forecast.html',
        controller: 'forecastController'
    });
});

// Don't forget to tell your View that your doing an SAP
// Also don't forget the templates you use can't be blank 
// or else you'll get an error


// Next, we're going to build a custom service: