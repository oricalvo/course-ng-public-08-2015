(function () {

    angular.module("MyApp").provider("contactService", function () {
        var cachingEnabled = false;

        var provider = {
            $get: function ($rootScope) {
                console.log("contactServiceProvider::$get");

                var contacts = [
                    { id: 1, name: "Ori" },
                    { id: 2, name: "Roni" },
                ];

                var service = {
                    add: function (contact) {
                        contacts.push(contact);

                        $rootScope.$broadcast("contactAdded", contact);
                    },
                    getAll: function () {
                        if (cachingEnabled) {
                        }

                        return contacts;
                    },
                };

                return service;
            },
            enableCaching: function (enabled) {
                console.log("contactServiceProvider.enableCaching: " + enabled);

                cachingEnabled = enabled;
            }
        };

        return provider;

    });

})();
