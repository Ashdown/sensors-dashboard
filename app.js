var express = require("express");
var app = express();

app.get("/sensors", function (req, res) {
	res.setHeader("Content-Type", "application/json");
	res.send(JSON.stringify({a: 1}));
});

app.listen(3000);

module.exports = app;

