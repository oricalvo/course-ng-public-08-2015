(function () {

    function HomeCtrl($scope) {
        this.message = "Hello Angular";

        this.contacts = [
            { id: 1, name: "Ori" },
            { id: 2, name: "Roni" },
        ];

        this.remove = function (index) {
            this.contacts.splice(index, 1);
        }
    }

    angular.module("MyApp").controller("HomeCtrl", HomeCtrl);

})();
