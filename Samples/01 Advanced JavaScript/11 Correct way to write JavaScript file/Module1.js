(function () {
    "use strict";

    function g() {
        console.log("module1.g");

        console.log(this);
    }

    g();

})();

