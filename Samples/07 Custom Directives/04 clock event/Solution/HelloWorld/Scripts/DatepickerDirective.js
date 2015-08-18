/// <reference path="angular.js" />

(function () {

    angular.module("myApp").directive("datepicker", function () {
        return {
            restrict: "E",
            link: function (scope, element, attrs) {
                console.log("Datepicker directive");

                element.datepicker();
            },
            replace: true,
            template: "<input class='datepicker' />",
        };
    });

})();
