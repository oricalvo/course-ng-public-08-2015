(function () {

    function HomeCtrl($scope, $injector) {
        $scope.data = 123;

        var pt = $injector.instantiate(Point, { x: 10, y: 100, $http: undefined });

        //console.log(!!$injector.get("$http"));
    }

    function Point($http, $compile, $q, $parse, $interpolate, x, y) {
        console.log(x);
        console.log(y);
        console.log(!!$http);
        console.log(!!$interpolate);
    }

    angular.module("MyApp").controller("HomeCtrl",
        [
            "$scope",
            "$injector",
            HomeCtrl
        ]);

})();

