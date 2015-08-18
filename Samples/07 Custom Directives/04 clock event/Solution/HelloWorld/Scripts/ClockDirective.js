/// <reference path="angular.js" />

(function () {

    function ClockDirectiveController($scope) {
        var taTime = new Date();

        this.zones = [
            { name: "TA", time: taTime },
            { name: "NY", time: addHours(taTime, -7) },
            { name: "LONDON", time: addHours(taTime, -2) },
        ];

        this.$scope = $scope;
    }

    ClockDirectiveController.prototype.removeZone = function (zoneName) {
        for (var i = 0; i < this.zones.length; i++) {
            if (this.zones[i].name == zoneName) {
                this.zones.splice(i, 1);
                return;
            }
        }
    }

    ClockDirectiveController.prototype.refresh = function () {
        this.onRefresh();
    }

    angular.module("myApp").directive("clock", function ($parse, $timeout) {
        return {
            restrict: "E",
            scope: {
                onRefresh: "&",
            },
            replace: true,
            controller: ClockDirectiveController,
            controllerAs: "ctrl",
            templateUrl: "/views/Main/Clock",
            transclude: true,
            bindToController: true,
            link: function (scope, element, attrs, ctrl, transcludeFn) {
                if (attrs.name) {
                    var getter = $parse(attrs.name);
                    var setter = getter.assign;
                    if (setter) {
                        setter(scope.$parent, ctrl);
                    }
                }

                scope.$watch(function () {
                    return ctrl.zones;
                }, function () {
                    element.find("span.footer").each(function () {
                        var footer = $(this);

                        transcludeFn(function (clone) {
                            footer.append(clone);
                        })
                    });
                });
            },
        };
    });

    function addHours(time, hours) {
        var res = new Date(time.getTime());
        res.setHours(res.getHours() + hours);
        return res;
    }
})();
