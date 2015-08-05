/// <reference path="Group.js" />

var ContactBook = ContactBook || {};

ContactBook.book = (function (Contact, Group) {

    function Book() {
        this.root = new Group("~");

        this.seed(this.root);
    }

    Book.prototype.dump = function () {
        this.root.dump();
    }

    Book.prototype.seed = function(root) {
        var friends = new Group("Friends");
        root.addItem(friends);

        var coWorkers = new Group("Co-Workers");
        root.addItem(coWorkers);

        var ori = new Contact("Ori", "ori@gmail.com");
        root.addItem(ori);

        var udi = new Contact("Udi", "udi@gmail.com");
        friends.addItem(udi);

        var shlomi = new Contact("Shlomi", "shlomi@gmail.com");
        coWorkers.addItem(shlomi);
    }

    var book = new Book();
    book.dump();

    return book;

})(ContactBook.Contact, ContactBook.Group);
