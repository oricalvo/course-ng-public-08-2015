(function () {

    function ContactNewCtrl($scope, $location, contactService) {
        console.log($location.search().id);

        $scope.add = function () {

            //$location.url("abc?id=1");

            console.log($location.search().id);

            //if (!$scope.name) {
            //    return;
            //}

            //var contact = {
            //    name: $scope.name
            //};

            //contactService.add(contact);
        }
    }

    angular.module("MyApp").controller("ContactNewCtrl", ContactNewCtrl);

})();
