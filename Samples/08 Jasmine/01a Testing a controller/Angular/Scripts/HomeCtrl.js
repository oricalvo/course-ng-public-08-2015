/// <reference path="angular.js" />

(function (Contact) {

    function HomeCtrl($scope, contactService) {
        var me = this;

        me.contactService = contactService;

        me.contactService.getAll()
            .then(function (contacts) {
                me.contacts = contacts;
            });
    }

    HomeCtrl.prototype.save = function () {
        //if (!this.name) {
        //    return;
        //}

        var contact = new Contact(this.name);
        this.contactService.save(contact)
            .then(function () {
            });
    }

    angular.module("myApp").controller("HomeCtrl", ["$scope", "contactService", HomeCtrl]);

})(ContactBook.Contact);
