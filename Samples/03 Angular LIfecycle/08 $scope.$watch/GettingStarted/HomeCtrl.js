(function () {

    function HomeCtrl($scope) {
        $scope.name = "";

        $scope.change = function () {
            //$scope.name += "X";

            //$scope.obj.name += "X";

            $scope.obj.address.city += "X";
        }

        //$scope.$watch(function () {
        //    return window.location.hash;
        //}, function (newValue, oldValue) {
        //});

        $scope.obj = {
            name: "Ori",
            address: {
                city: "TA",
            }
        };

        $scope.$watch("obj", function (newValue, oldValue) {
            if (newValue == oldValue) {
                return;
            }

            console.log(oldValue + " --> " + newValue);
        }, true);

        $scope.$watch(function () {
            console.log("Dirty checking");
        });
    }

    angular.module("MyApp").controller("HomeCtrl", HomeCtrl);

})();
