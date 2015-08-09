(function () {

    function HomeCtrl($scope, $location) {
        var ori = { id: 1, name: "Ori" };
        var roni = { id: 2, name: "Roni" };
        $scope.contacts = [
            ori,
            roni,
            ori,
        ];

        $scope.run = function () {
            //console.log($scope.contacts);

            $scope.contacts.push(ori);

            ori.name += "X";
        }
    }

    angular.module("MyApp").controller("HomeCtrl", HomeCtrl);

})();
