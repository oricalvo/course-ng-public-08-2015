(function () {

    function ContactNewCtrl($scope, contactService) {
        $scope.add = function () {

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
