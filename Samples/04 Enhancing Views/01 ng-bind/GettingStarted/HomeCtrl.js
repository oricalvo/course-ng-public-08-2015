(function () {

    function HomeCtrl($scope, $location) {
        $scope.message = "Hello Angular";
    }

    angular.module("MyApp").controller("HomeCtrl", HomeCtrl);

})();
