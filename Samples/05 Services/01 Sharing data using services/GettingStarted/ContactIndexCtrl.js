(function () {

    function ContactIndexCtrl($scope, contactService) {

        $scope.$on("contactAdded", function (e, contact) {
            $scope.contacts.push(toViewModel(contact));
        });

        $scope.contacts = contactService.getAll().map(toViewModel);

        function toViewModel(contact) {
            return {
                isSelected: true,
                name: contact.name
            };
        }
    }

    angular.module("MyApp").controller("ContactIndexCtrl", ContactIndexCtrl);

})();
