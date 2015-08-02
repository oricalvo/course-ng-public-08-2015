/// <reference path="ServiceLocator.js" />

(function () {

    var service ={};

    ServiceLocator.register("myservice", service);

    var res = ServiceLocator.resolve("myservice");

    console.log(service == res);

})();
