angular.module("MyApp", ["ngRoute"])
    .config(function ($routeProvider) {
        $routeProvider
            .when("/", {
                templateUrl: "/Home.html",
                controller: "HomeCtrl",
            })
            .when("/about", {
                templateUrl: "/About.html",
                controller: "AboutCtrl",
            })
            .otherwise({
                redirectTo: "/",
            });
    });
