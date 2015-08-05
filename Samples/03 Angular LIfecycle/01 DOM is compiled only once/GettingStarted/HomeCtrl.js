(function () {

    function HomeCtrl($scope, $location) {
        $scope.message = "Hello Angular";

        console.log("ID = " + $location.search().id);

        console.log("ID = " + window.location.search);

        var originalContacts = [
            { id: 1, name: "Ori" },
            { id: 2, name: "Roni" },
        ];

        $scope.contacts = originalContacts;

        $scope.search = function () {
            $scope.contacts = originalContacts.filter(function (contact) {
                if (contact.name.indexOf($scope.searchStr) != -1) {
                    return contact;
                }
            });
        }

        $scope.remove = function (index) {
            $scope.contacts.splice(index, 1);
        }
    }

    angular.module("MyApp").controller("HomeCtrl", HomeCtrl);

})();
