var ContactBook = ContactBook || {};

(function () {

    var nextId = 0;

    function Contact(id, name) {
        if (name == undefined) {
            name = id;
            id = --nextId;
        }

        this.id = id;
        this.name = name;
    }

    ContactBook.Contact = Contact;
})();
