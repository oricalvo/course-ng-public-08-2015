/// <reference path="Group.js" />

var ContactBook = ContactBook || {};

(function (Contact, Group) {

    function Book() {
        this.root = new Group("~");
        this.currentGroup = this.root;
        this.seed();
    }

    Book.prototype.changeGroup = function (group) {
        this.currentGroup = group;
    }

    Book.prototype.log = function () {
        this.root.log(0);
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

    angular.module("MyApp").service("book", Book);

})(ContactBook.Contact, ContactBook.Group);
