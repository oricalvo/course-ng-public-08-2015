/// <reference path="Group.js" />

var ContactBook = ContactBook || {};

ContactBook.Book = (function (Contact, Group) {

    function Book() {
        this.root = new Group("~");
        
        this.seed();
    }

    Book.prototype.getRoot = function () {
        return this.root;
    }

    Book.prototype.dump = function () {
        this.root.dump();
    }

    Book.prototype.seed = function () {
        var friends = new Group("Friends");
        this.root.addItem(friends);

        var coWorkers = new Group("Co-Workers");
        this.root.addItem(coWorkers);

        var ori = new Contact("Ori", "ori@gmail.com");
        this.root.addItem(ori);

        var udi = new Contact("Udi", "udi@gmail.com");
        friends.addItem(udi);

        var shlomi = new Contact("Shlomi", "shlomi@gmail.com");
        coWorkers.addItem(shlomi);
    }

    return new Book();

})(ContactBook.Contact, ContactBook.Group);
