/// <reference path="../BL/Book.js" />

var HomeCtrl = (function (Book, Group, Contact) {
    function HomeCtrl($scope) {
        this.currentGroup = Book.root;

        this.loadItems();
    }

    HomeCtrl.prototype.loadItems = function () {
        this.items = $.map(this.currentGroup.items, function (item) {
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

    return HomeCtrl;
})(ContactBook.Book, ContactBook.Group, ContactBook.Contact);
