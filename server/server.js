"use strict";
exports.__esModule = true;
var express = require("express");
var path = require("path");
var app = express();
var PORT = process.env.PORT || 8080;
app.use("/", express.static(path.resolve(__dirname, "../client/assets")));
app.get("/", function (req, res) {
    res.sendFile(path.resolve(__dirname, "../client/views/index.html"));
});
app.listen(PORT, function () {
    var newLocal = "listing on http://localhost:" + PORT + "/";
    console.log(newLocal);
});
