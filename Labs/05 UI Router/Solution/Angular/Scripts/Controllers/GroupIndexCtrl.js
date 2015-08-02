/// <reference path="../BL/Book.js" />

(function (Group, Contact) {
    function GroupIndexCtrl($scope, book) {
        var me = this;

        me.book = book;
        me.loadItems();
    }

    GroupIndexCtrl.prototype.loadItems = function () {
        var me = this;

        me.items = [];

        me.items = $.map(me.book.currentGroup.items, function (item) {
            return new ItemModel(item);
        });

        if (me.book.currentGroup.parent) {
            me.items.unshift(new BackToParent());
        }
    }

    GroupIndexCtrl.prototype.itemClicked = function (itemModel) {
        var me = this;

        if (itemModel.isGroup) {
            me.book.currentGroup = itemModel.item;

            this.loadItems();
        }
        else if (itemModel.isBackToParent) {
            me.book.changeGroup(me.book.currentGroup.parent);

            me.loadItems();
        }
    }

    function ItemModel(item) {
        var me = this;

        me.item = item;

        me.isContact = (item instanceof Contact);
        me.isGroup = (item instanceof Group);

        if (me.isContact) {
            me.name = item.name;
            if (item.email) {
                me.name += (", " + item.email);
            }
        }
        else if (this.isGroup) {
            me.name = item.name;
        }
    }

    function BackToParent() {
        var me = this;

        me.item = null;

        me.isContact = false;
        me.isGroup = false;
        me.isBackToParent = true;

        me.name = "[..]";
    }

    angular.module("MyApp").controller("GroupIndexCtrl", GroupIndexCtrl);

})(ContactBook.Group, ContactBook.Contact);
