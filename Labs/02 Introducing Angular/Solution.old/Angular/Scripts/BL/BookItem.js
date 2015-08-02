var ContactBook = ContactBook || {};

(function () {

    function BookItem() {
        this.parent = null;
    }

    BookItem.prototype.onAdded = function (parent) {
        this.parent = parent;
    }

    ContactBook.BookItem = BookItem;

})();
