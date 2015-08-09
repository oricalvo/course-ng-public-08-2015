(function () {

    function HomeCtrl($scope, $location, $interval) {
        $scope.birthday = new Date();

        $scope.run = function () {
        }

        $interval(function () {
            $scope.birthday = new Date();
        }, 1000);
    }

    angular.module("MyApp").controller("HomeCtrl", HomeCtrl);

})();
