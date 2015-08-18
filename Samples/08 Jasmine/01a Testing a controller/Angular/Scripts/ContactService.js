/// <reference path="angular.js" />

(function (Contact) {

    function ContactService($q) {
        this.contacts = null;
        this.$q = $q;
    }

    ContactService.prototype.getAll = function (contact) {
        var me = this;

        if (me.contacts) {
            return $q.when(me.contacts);
        }

        var deferred = me.$q.defer();

        setTimeout(function () {
            me.contacts = [
                new Contact(1, "Ori"),
                new Contact(2, "Roni"),
            ];

            deferred.resolve(me.contacts);
        }, 1000);

        return deferred.promise;
    }

    ContactService.prototype.save = function (contact) {
        var me = this;

        var deferred = me.$q.defer();

        setTimeout(function () {
            me.contacts.push(contact);

            deferred.resolve(contact);
        }, 1000);

        return deferred.promise;
    }

    angular.module("myApp").service("contactService", ["$q", ContactService]);

})(ContactBook.Contact);
