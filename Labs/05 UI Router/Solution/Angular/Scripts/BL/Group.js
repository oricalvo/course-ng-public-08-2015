/// <reference path="Helpers.js" />
/// 
var ContactBook = ContactBook || {};

(function (BookItem) {

    function Group(name) {
        BookItem.call(this);

        this.name = name;
        this.items = [];
    }

    Group.prototype = Object.create(BookItem.prototype);

    Group.prototype.addItem = function (item) {
        this.items.push(item);

        item.onAdded(this);
    }

    ContactBook.Group = Group;

})(ContactBook.BookItem);

