/// <reference path="angular.js" />
/// <reference path="jasmine.js" />
/// <reference path="angular-mocks.js" />

describe("HomeCtrl", function () {

    beforeEach(module('MyApp'));

    var $controller;
    beforeEach(inject(function (_$controller_) {
        $controller = _$controller_;
    }));

    it("Generates validation error when name is empty", function () {
        var scope = {};
        var ctrl = $controller("HomeCtrl", {
            $scope: scope,
        });

        scope.sayHello();

        expect(scope.message).toBeTruthy();
    });
});