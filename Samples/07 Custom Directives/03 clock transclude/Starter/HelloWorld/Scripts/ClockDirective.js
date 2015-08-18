/// <reference path="angular.js" />

(function () {

    function ClockDirectiveController($scope) {
        var taTime = new Date();

        this.zones = [
            { name: "TA", time: taTime },
            { name: "NY", time: addHours(taTime, -7) },
            { name: "LONDON", time: addHours(taTime, -2) },
        ];
    }

    ClockDirectiveController.prototype.removeZone = function (zoneName) {
        for (var i = 0; i < this.zones.length; i++) {
            if (this.zones[i].name == zoneName) {
                this.zones.splice(i, 1);
                return;
            }
        }
    }

    angular.module("myApp").directive("clock", function ($parse) {
        return {
            restrict: "E",
            scope: true,
            replace: true,
            controller: ClockDirectiveController,
            controllerAs: "ctrl",
            templateUrl: "/views/Main/Clock",
            link: function (scope, element, attrs, ctrl) {
                if (attrs.name) {
                    var getter = $parse(attrs.name);
                    var setter = getter.assign;
                    if (setter) {
                        setter(scope.$parent, ctrl);
                    }
                }
            }
        };
    });

    function addHours(time, hours) {
        var res = new Date(time.getTime());
        res.setHours(res.getHours() + hours);
        return res;
    }
})();
