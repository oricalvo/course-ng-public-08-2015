(function () {

    //HomeCtrl.$inject = ["$scope", "$location"];
    function HomeCtrl(a, b) {
        a.data = 123;
    }

    angular.module("MyApp").controller("HomeCtrl",
        [
            "$scope",
            "$location",
            HomeCtrl
        ]);

})();
