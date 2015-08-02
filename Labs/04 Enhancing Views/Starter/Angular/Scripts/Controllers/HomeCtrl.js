/// <reference path="../BL/Book.js" />

(function (Book, Group, Contact) {
    function HomeCtrl($scope) {
        this.currentGroup = Book.root;

        this.loadItems();
    }

    HomeCtrl.prototype.loadItems = function () {

        this.items = [];

        this.items = $.map(this.currentGroup.items, function (item) {
            return new ItemModel(item);
        });

        if (this.currentGroup.parent) {
            this.items.unshift(new BackToParent());
        }
    }

    HomeCtrl.prototype.itemClicked = function (itemModel) {
        if (itemModel.isGroup) {
            this.currentGroup = itemModel.item;

            this.loadItems();
        }
        else if (itemModel.isBackToParent) {
            this.currentGroup = this.currentGroup.parent;

            this.loadItems();
        }
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

    function BackToParent() {
        this.item = null;

        this.isContact = false;
        this.isGroup = false;
        this.isBackToParent = true;

        this.name = "[..]";
    }

    angular.module("MyApp").controller("HomeCtrl", HomeCtrl);

})(ContactBook.Book, ContactBook.Group, ContactBook.Contact);
