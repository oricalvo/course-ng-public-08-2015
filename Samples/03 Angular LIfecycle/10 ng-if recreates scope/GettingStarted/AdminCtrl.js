(function () {

    function AdminCtrl($scope, $rootScope) {

        console.log("AdminCtrl was created: " + $scope.$id);

        var off = $rootScope.$on("pageChanged", function (e, args) {
            console.log("Page changed handled by scope " + $scope.$id);

            $scope.page = args.page;
        });

        $scope.$on("$destroy", function () {
            off();
        });
    }

    angular.module("MyApp").controller("AdminCtrl", AdminCtrl);

})();
