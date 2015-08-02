/// <reference path="../BL/Book.js" />

var HomeCtrl = (function (Book, Group, Contact) {
    function HomeCtrl($scope) {
        $scope.currentGroup = Book.root;

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

    return HomeCtrl;
})(ContactBook.Book, ContactBook.Group, ContactBook.Contact);
