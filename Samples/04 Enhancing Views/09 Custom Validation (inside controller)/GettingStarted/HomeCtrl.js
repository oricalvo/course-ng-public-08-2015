(function () {

    function HomeCtrl($scope, $location) {
        $scope.save = function () {

            if ($scope.name == $scope.email) {
                $scope.form.name.$setValidity("strangeName", false);
            }
            else {
                $scope.form.name.$setValidity("strangeName", true);
            }

            console.log("VALID: " + $scope.form.$valid);

            console.log($scope.form);

            if (!$scope.form.$valid) {
                return;
            }
        }
    }

    angular.module("MyApp").controller("HomeCtrl", HomeCtrl);

})();
