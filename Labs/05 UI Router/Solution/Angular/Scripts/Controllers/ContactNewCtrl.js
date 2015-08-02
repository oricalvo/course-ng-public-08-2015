/// <reference path="../BL/Book.js" />

(function (Group, Contact) {
    function ContactNewCtrl($scope, $rootScope, $location, book) {
        var me = this;

        me.book = book;
        me.$scope = $scope;
        me.$rootScope = $rootScope;
        me.$location = $location;

        $scope.$on("viewChanged", function (args, contact) {
            me.name = "";
            me.email = "";
            me.form.$setPristine();
            me.form.$setUntouched();
            me.form.$submitted = false;
        });
    }

    ContactNewCtrl.prototype.save = function () {
        var me = this;

        if (!me.form.$valid) {
            return;
        }

        var contact = new Contact(me.name, me.email);
        me.book.currentGroup.addItem(contact);

        me.$location.url("");
    }

    angular.module("MyApp").controller("ContactNewCtrl", ContactNewCtrl);

})(ContactBook.Group, ContactBook.Contact);
