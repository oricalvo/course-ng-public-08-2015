(function () {

    angular.module("MyApp", ["ui.router"])
        .config(function ($stateProvider, $urlRouterProvider, $locationProvider) {
            $stateProvider
                .state("group-index", {
                    templateUrl: "/views/GroupIndex",
                    url: "/",
                    controller: "GroupIndexCtrl as ctrl",
                })
                .state("contact-new", {
                    templateUrl: "/views/ContactNew",
                    url: "/contact/new",
                    controller: "ContactNewCtrl as ctrl",
                });

            $urlRouterProvider.otherwise("/");

            $locationProvider.html5Mode(true);
        })
        .run(function () {
        });

})();
