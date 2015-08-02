(function (Book, Group, Contact) {

    function seed(book) {
        var friends = new Group("Friends");
        book.root.addItem(friends);

        var coWorkers = new Group("Co-Workers");
        book.root.addItem(coWorkers);

        var ori = new Contact("Ori", "ori@gmail.com");
        book.root.addItem(ori);

        var udi = new Contact("Udi", "udi@gmail.com");
        friends.addItem(udi);

        var shlomi = new Contact("Shlomi", "shlomi@gmail.com");
        coWorkers.addItem(shlomi);
    }

    var book = new Book();
    seed(book);

    book.dump();

})(ContactBook.Book, ContactBook.Group, ContactBook.Contact);
