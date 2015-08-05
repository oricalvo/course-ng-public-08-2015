(function (Group) {

    function GroupIndexCtrl($scope) {

        $scope.group = ContactBook.book.root;

        $scope.changeCurrentGroup = function (item) {
            if (item instanceof Group) {
                $scope.group = item;
            }
        }

        $scope.gotoParent = function () {
            if ($scope.group.parent) {
                $scope.group = $scope.group.parent;
            }
        }
    }

    angular.module("MyApp").controller("GroupIndexCtrl", GroupIndexCtrl);

})(ContactBook.Group);
