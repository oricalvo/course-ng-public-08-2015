/// <reference path="../BL/Book.js" />

(function (Book, Group, Contact) {
    function ContactNewCtrl($scope, $rootScope) {
        var me = this;

        me.$scope = $scope;
        me.$rootScope = $rootScope;

        $scope.$on("viewChanged", function (args, contact) {
            me.name = "";
            me.email = "";
            me.form.$setPristine();
            me.form.$setUntouched();
            me.form.$submitted = false;
        });
    }

    ContactNewCtrl.prototype.save = function () {
        if (!this.form.$valid) {
            return;
        }

        var contact = new Contact(this.name, this.email);
        this.$rootScope.$broadcast("addContact", contact);

        this.$rootScope.$broadcast("closeView");
    }

    ContactNewCtrl.prototype.close = function () {
        this.$rootScope.$broadcast("closeView");
    }

    angular.module("MyApp").controller("ContactNewCtrl", ContactNewCtrl);

})(ContactBook.Book, ContactBook.Group, ContactBook.Contact);
