/// <reference path="ServiceLocator.js" />

define(["ServiceLocator"], function (ServiceLocator) {
    var service = {};

    ServiceLocator.register("myservice", service);

    var res = ServiceLocator.resolve("myservice");

    console.log(service == res);
});
