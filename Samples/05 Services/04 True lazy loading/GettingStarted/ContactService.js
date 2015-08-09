(function () {

    angular.$provide.service("contactService", function () {
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
                    return contacts;
                },
            };

            return service;
    });

})();
