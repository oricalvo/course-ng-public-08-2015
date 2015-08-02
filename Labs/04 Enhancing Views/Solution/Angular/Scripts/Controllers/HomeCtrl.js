/// <reference path="../BL/Book.js" />

(function (Book, Group, Contact) {
    function HomeCtrl($scope) {
        var me = this;

        me.$scope = $scope;

        me.view = "groupIndex";
        me.views = [this.view];

        me.$scope.$on("closeView", function () {
            me.closeView();
        });
    }

    HomeCtrl.prototype.newContact = function () {
        this.changeView("contactNew");
    }

    HomeCtrl.prototype.newGroup = function () {
        this.changeView("groupNew");
    }

    HomeCtrl.prototype.changeView = function (viewName) {
        this.views.push(viewName);
        this.view = this.views[this.views.length - 1];

        this.$scope.$broadcast("viewChanged", this.view);
    }

    HomeCtrl.prototype.closeView = function (viewName) {
        this.views.pop();
        this.view = this.views[this.views.length - 1];

        this.$scope.$broadcast("viewChanged", this.view);
    }

    angular.module("MyApp").controller("HomeCtrl", HomeCtrl);

})(ContactBook.Book, ContactBook.Group, ContactBook.Contact);
