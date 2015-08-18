/// <reference path="angular.js" />

(function () {

    function HomeCtrl($scope) {
        $scope.sayHello = function () {
            if (!$scope.name) {
                $scope.error = "Please specify a name";
                return;
            }

            $scope.message = "Hello " + $scope.name;
        }
    }

    angular.module("MyApp").controller("HomeCtrl", HomeCtrl);

})();
