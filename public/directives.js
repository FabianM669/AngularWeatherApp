// DIRECTIVES:

weatherApp.directive("weatherReport", function () {
    return {
        restrict: 'E',
        templateUrl: 'directives/weatherReport.html',
        replace: true,
        scope: {
            // because it's an object, not just text, we use and
            // '=' sign for two way binding:
            weatherDay: "=",
            // we use '&' when passing functions, like below:
            convertToStandard: "&",
            convertToDate: "&",
            // at is for strings:
            dateFormat: "@"
        }
    };
});