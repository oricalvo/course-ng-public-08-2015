/// <reference path="Group.js" />

var ContactBook = ContactBook || {};

ContactBook.Book = (function (Contact, Group) {

    function Book() {
        this.root = new Group("~");        
    }

    Book.prototype.dump = function () {
        this.root.dump();
    }

    return Book;

})(ContactBook.Contact, ContactBook.Group);
