(function () {

    function SideBarCtrl($scope, $rootScope) {
        $scope.pages = ["File", "Admin", "About"];

        $scope.changePage = function (page) {
            console.log("New page: " + page);

            $rootScope.$broadcast("pageChanged", { page: page });
        }
    }

    angular.module("MyApp").controller("SideBarCtrl", [
        "$scope",
        "$rootScope",
        SideBarCtrl
    ]);
})();
