/// <reference path="typings/angularjs/angular.d.ts" />
var HomeCtrl = (function () {
    function HomeCtrl() {
        this.message = "Hello Angular";
        this.contacts = [
            { id: 1, name: "Ori" },
            { id: 2, name: "Roni" },
        ];
    }
    HomeCtrl.prototype.remove = function (index) {
        this.contacts.splice(index, 1);
    };
    return HomeCtrl;
})();
angular.module("MyApp").controller("HomeCtrl", HomeCtrl);
//# sourceMappingURL=HomeCtrl.js.map