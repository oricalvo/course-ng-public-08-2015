(function () {

    function HomeCtrl($scope, $location) {
        var ori = { id: 1, name: "Ori", product: "Or" };
        var roni = { id: 2, name: "Roni", product: "Or" };

        var originalContacts = [
            ori,
            roni,
        ];

        $scope.contacts = originalContacts;

        $scope.run = function () {
        }

        $scope.search = function (searchStr) {
            $scope.contacts = originalContacts.filter(function (contact) {
                return (contact.name.indexOf(searchStr) != -1);
            });
        }
    }

    angular.module("MyApp").controller("HomeCtrl", HomeCtrl);

})();
