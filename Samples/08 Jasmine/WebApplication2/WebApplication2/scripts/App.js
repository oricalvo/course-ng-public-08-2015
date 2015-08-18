/// <reference path="angular.js" />

angular.module("MyApp", []).config(function ($locationProvider) {
    $locationProvider.html5Mode(true);
});


angular.module("MyApp").controller("HomeCtrl", function ($scope, $location) {
    $scope.run = function () {

        $scope.$evalAsync(function () {

            $location.url("/?id=123");
        });
    }
});
