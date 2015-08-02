/// <reference path="Group.js" />

var ContactBook = ContactBook || {};

ContactBook.book = (function (Contact, Group) {

    function Book() {
        this.root = new Group("~");
    }

    Book.prototype.dump = function () {
        this.root.dump();
    }

    return new Book();

})(ContactBook.Contact, ContactBook.Group);
