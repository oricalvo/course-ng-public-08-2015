/// <reference path="Helpers.js" />

var ContactBook = ContactBook || {};

(function (BookItem) {

    function Contact(name, email) {
        BookItem.call(this);

        this.name = name;
        this.email = email;
    }

    Contact.prototype = Object.create(BookItem.prototype);

    ContactBook.Contact = Contact;
})(ContactBook.BookItem);

