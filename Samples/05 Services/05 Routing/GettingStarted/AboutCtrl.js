(function () {

    function AboutCtrl($scope, $location) {
        $scope.message = "Hello Routing";

        $scope.save = function () {
            $location.url("/");
        }
    }

    angular.module("MyApp").controller("AboutCtrl", AboutCtrl);

})();
