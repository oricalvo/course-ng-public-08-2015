angular.module("myApp").controller("HomeCtrl", function ($scope) {

    var taTime = new Date();

    $scope.zones = [
        { name: "TA", time: taTime },
        { name: "NY", time: addHours(taTime, -7) },
        { name: "LONDON", time: addHours(taTime, -2) },
    ];

    function addHours(time, hours) {
        var res = new Date(time.getTime());
        res.setHours(res.getHours() + hours);
        return res;
    }
});
