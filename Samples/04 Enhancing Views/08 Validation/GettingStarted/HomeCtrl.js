(function () {

    function HomeCtrl($scope, $location) {
        $scope.save = function () {
            console.log("VALID: " + $scope.form.$valid);

            console.log($scope.form);

            if (!$scope.form.$valid) {
                return;
            }
        }
    }

    angular.module("MyApp").controller("HomeCtrl", HomeCtrl);

})();
