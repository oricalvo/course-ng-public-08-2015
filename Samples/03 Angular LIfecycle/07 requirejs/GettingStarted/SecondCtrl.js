define(["App"], function (module) {
    console.log("SecondCtrl");

    function SecondCtrl($scope, $injector) {
        $scope.data = 123;
    }

    module.controller("SecondCtrl",
        [
            "$scope",
            "$injector",
            SecondCtrl
        ]);

});
