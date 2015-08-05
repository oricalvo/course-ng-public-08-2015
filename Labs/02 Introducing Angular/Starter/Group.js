/// <reference path="Helpers.js" />
/// 
var ContactBook = ContactBook || {};

ContactBook.Group = (function (BookItem) {

    function Group(name) {
        BookItem.call(this);

        this.name = name;
        this.items = [];
    }

    Group.prototype = Object.create(BookItem.prototype);

    Group.prototype.dump = function () {
        console.log(this.name);

        for (var i = 0; i < this.items.length; i++) {
            var item = this.items[i];

            item.dump();
        }
    }

    Group.prototype.addItem = function (item) {
        this.items.push(item);

        item.onAdded(this);
    }

    return Group;

})(ContactBook.BookItem);

