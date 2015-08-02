"use strict";

var common = require("Common");

var map = {};

module.exports = {
    register: function (name, instance) {
        if (map[name]) {
            throw new Error("Service with name " + name + " already exists");
        }

        map[name] = instance;
    },
    resolve: function (name) {
        if (!map[name]) {
            throw new Error("Service with name " + name + " does not exist");
        }

        return map[name];
    }
};
