angular.module("MyApp", []);

angular.module("MyApp").filter("date", function ($http, $parse) {
    return function (value, format) {
        console.log(arguments);

        var str = moment(value).format('MMMM Do YYYY, h:mm:ss a');

        return str;
    }
});
