var Network = (function () {
    "use strict";

    var lastRequestedUrl;

    function httpGet(url) {
        console.log("httpGet: " + url);

        lastRequestedUrl = url;
    }

    function httpPost(url) {
    }

    function doSomething() {
    }

    return {
        httpGet: httpGet,
        httpPost: httpPost,
    };
})();

