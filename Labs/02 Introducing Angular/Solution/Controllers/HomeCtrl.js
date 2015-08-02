/// <reference path="../BL/Book.js" />

var HomeCtrl = (function (book, Group, Contact) {

    function HomeCtrl($scope) {
        $scope.currentGroup = book.root;

        $scope.items = $.map($scope.currentGroup.items, function (item) {
            return new ItemModel(item);
        });
    }

    function ItemModel(item) {

        this.item = item;

        this.isContact = (item instanceof Contact);
        this.isGroup = (item instanceof Group);

        if (this.isContact) {
            this.name = item.name + ", " + item.email;
        }
        else if (this.isGroup) {
            this.name = item.name;
        }
    }

    angular.module("ContactBookApp").controller("HomeCtrl", HomeCtrl);

})(ContactBook.book, ContactBook.Group, ContactBook.Contact);
