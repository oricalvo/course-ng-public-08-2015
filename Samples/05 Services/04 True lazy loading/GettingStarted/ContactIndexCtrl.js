(function () {

    function ContactIndexCtrl($scope, $injector) {

        $scope.loadContacts = false;

        $scope.doLoadContacts = function () {
            if ($scope.loadContacts) {

                require(["ContactService"], function (contactService) {
                    var contactService = $injector.get("contactService");

                    $scope.contacts = contactService.getAll().map(toViewModel);

                    $scope.$apply();
                });
            }
        }

        function toViewModel(contact) {
            return {
                isSelected: true,
                name: contact.name
            };
        }
    }

    angular.module("MyApp").controller("ContactIndexCtrl", ContactIndexCtrl);

})();
