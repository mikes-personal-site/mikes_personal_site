"use strict";
exports.__esModule = true;
var express = require("express");
var path = require("path");
var app = express();
var PORT = process.env.PORT || 3000;
app.use("/", express.static(path.resolve(__dirname, "../client")));
app.get("/", function (req, res) {
    res.sendFile(path.resolve(__dirname, "../client/views/index.html"));
});
app.get("/projects", function (req, res) {
    res.sendFile(path.resolve(__dirname, "../client/views/projects.html"));
});
app.get("/stylesProjects.css", function (req, res) {
    res.sendFile(path.resolve(__dirname, "../client/assets/styles/stylesProjects.css"));
});
app.get("/contact", function (req, res) {
    res.sendFile(path.resolve(__dirname, "../client/views/contact.html"));
});
app.get("/stylesContact.css", function (req, res) {
    res.sendFile(path.resolve(__dirname, "../client/assets/styles/stylesContact.css"));
});
app.listen(PORT, function () {
    var newLocal = "listing on http://localhost:" + PORT + "/";
    console.log(newLocal);
});
