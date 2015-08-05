define(["App"], function (module) {
    console.log("HomeCtrl");

    function HomeCtrl($scope, $injector) {
        $scope.data = 123;

        var pt = $injector.instantiate(Point, { x: 10, y: 100, $http: undefined });

        //console.log(!!$injector.get("$http"));

        setTimeout(function () {
            $scope.data = "XXX";

            $scope.$apply();
        }, 2000);

        $scope.run = function () {
        }
    }

    function Point($http, $compile, $q, $parse, $interpolate, x, y) {
        console.log(x);
        console.log(y);
        console.log(!!$http);
        console.log(!!$interpolate);
    }

    module.controller("HomeCtrl",
        [
            "$scope",
            "$injector",
            HomeCtrl
        ]);

});
