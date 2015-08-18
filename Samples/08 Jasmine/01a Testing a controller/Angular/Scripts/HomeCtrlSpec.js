describe("HomeCtrl", function () {
    var ctrl;
    var scope;
    var contactService;
    var $q;

    beforeEach(module("myApp"));

    beforeEach(inject(function ($controller, _contactService_, _$q_) {
        scope = {};
        ctrl = $controller("HomeCtrl", { $scope: scope });
        contactService = _contactService_;
        $q = _$q_;
    }));

    it("does not allow save a contact with an empty name", function () {
        ctrl.name = "";

        spyOn(contactService, "save").and.callFake(function () {
            var deferred = $q.defer();

            deferred.reject();

            return deferred.promise;
        });

        ctrl.save();

        expect(contactService.save).not.toHaveBeenCalled();
    });
});
