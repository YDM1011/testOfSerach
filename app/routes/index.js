const fs = require("fs");
const path = require("path");
const Routers = [];
exports.Routers = Routers;
fs
    .readdirSync(__dirname)
    .filter(function (file) {
        return (file.indexOf(".") !== 0) && (file !== "index.js") && (file !== "node_modules");
    })
    .forEach(function (file) {
        var router = require(path.join(__dirname, file));
        if (router.router)
            Routers.push(router);
    });
