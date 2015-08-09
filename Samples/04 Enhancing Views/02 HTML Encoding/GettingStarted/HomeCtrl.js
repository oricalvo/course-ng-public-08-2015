(function () {

    function HomeCtrl($scope, $location) {
        //$scope.message = "<h1>Hello</h1>";
        $scope.message = "<script>alert('Hello');</script>";
    }

    angular.module("MyApp").controller("HomeCtrl", HomeCtrl);

})();
