(function () {

    function ContentCtrl($scope) {
        $scope.$on("pageChanged", function (e, args) {
            console.log(args);

            $scope.page = args.page;
        });
    }

    angular.module("MyApp").controller("ContentCtrl", ContentCtrl);

})();
