(function () {

    function ContactNewCtrl($scope, $location, contactService) {
        $scope.add = function () {

            window.contactServiceProvider.enableCaching(false);

            if (!$scope.name) {
                return;
            }

            var contact = {
                name: $scope.name
            };

            contactService.add(contact);
        }
    }

    angular.module("MyApp").controller("ContactNewCtrl", ContactNewCtrl);

})();
