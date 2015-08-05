(function () {

    function HomeCtrl($scope) {
        $scope.data = 123;
    }

    angular.module("MyApp").controller("HomeCtrl", HomeCtrl);

})();
