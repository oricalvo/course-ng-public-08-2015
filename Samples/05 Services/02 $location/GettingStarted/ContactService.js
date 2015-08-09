(function () {

    //function ContactService($rootScope) {
    //    this.contacts = [
    //        { id: 1, name: "Ori" },
    //        { id: 2, name: "Roni" },
    //    ];

    //    this.$rootScope = $rootScope;
    //}

    //ContactService.prototype.add = function (contact) {
    //    this.contacts.push(contact);

    //    this.$rootScope.$broadcast("contactAdded", contact);
    //}

    //ContactService.prototype.getAll = function () {
    //    return this.contacts;
    //}

    //angular.module("MyApp").service("contactService", ContactService);

    //angular.module("MyApp").value("contactService", new ContactService());


    //angular.module("MyApp").service("contactService", function ($rootScope) {
    //    this.contacts = [
    //        { id: 1, name: "Ori" },
    //        { id: 2, name: "Roni" },
    //    ];

    //    this.add = function (contact) {
    //        this.contacts.push(contact);

    //        $rootScope.$broadcast("contactAdded", contact);
    //    };

    //    this.getAll = function () {
    //        return this.contacts;
    //    };
    //});

    angular.module("MyApp").factory("contactService", function ($rootScope) {
        var contacts = [
            { id: 1, name: "Ori" },
            { id: 2, name: "Roni" },
        ];

        return {
            add: function (contact) {
                contacts.push(contact);

                $rootScope.$broadcast("contactAdded", contact);
            },
            getAll: function () {
                return contacts;
            },
            enableCaching: function () {
            }
        };
    });

})();
