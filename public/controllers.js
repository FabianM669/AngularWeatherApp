// CONTROLLERS

weatherApp.controller('homeController', ['$scope', 'cityService', function ($scope, cityService) {

        $scope.city = cityService.city;
// Inside the home controller, you want to watch the "city" value
// becuz it might change:

        $scope.$watch('city', function () {
            cityService.city = $scope.city;
        });

// Now you have to do your bindings and interpolation (in your home page)

}]);

weatherApp.controller('forecastController', ['$scope', '$resource', '$routeParams', 'cityService',
    function ($scope, $resource, $routeParams, cityService) {

        $scope.city = cityService.city;

        $scope.days = $routeParams.days || '2';
// The " || 2 " above, remember we allowed a route that would have no days passed,
// so we're just setting a default parameter of 2 here
// Now, you pass this to the cnt in the API request params

// below, we're going to put on the scope, a variable that's going to
// contain the call:

        $scope.weatherAPI = $resource("http://api.openweathermap.org/data/2.5/forecast/daily", {
// because this data is coming from outside our web app, it's actually
// potentially a security problem, the browser will not be ok with this,
// you get around that by giving it a JSON_CALLBACK using a JSONP,
// all this says is that this API says it's ok to get your data from
// some other website
            callback: "JSON_CALLBACK" }, { get: { method: "JSONP" } });
// now that you have your resource available to you in your scope, you
// can get a result, like a weatherResult, so you pass to it an object
// that contains your parameters

        $scope.weatherResult = $scope.weatherAPI.get({ q: $scope.city, cnt: $scope.days, APPID: '15140743f0218cda440aa7c5344c7852' });

// So now we're going to output this data to the screen, we have a "weatherResult"
// which contains a list property which is an array with the data we want inside
// So we go to the Forecast html page...

        $scope.convertToFahrenheit = function (degK) {

            return Math.round((1.8 * (degK - 273)) + 32);
        };

        $scope.convertToDate = function (dt) {
            // we multiply by 1000 because the kind of date coming
            // back from the API is acutally in milliseconds! 
            // (just something you'd have to figure out)
            return new Date(dt * 1000);
            // this results in a better representation of the date
            // but we can still do better, thankfully, Angulars
            // $filter service has a whole bunch of functionality
            // check out Angulars API for details, we're actually 
            // going to do this directly in the HTML code
        };
    }]);
