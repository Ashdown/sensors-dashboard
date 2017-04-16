var express = require("express");
var app = express();

app.set("port", (process.env.PORT || 3000));

app.get("/sensors", function (req, res) {
	res.setHeader("Content-Type", "application/json");
	res.send(JSON.stringify({a: 1}));
});

app.listen(app.get("port"), function() {
	console.log("Node app is running on port", app.get("port"));
});


module.exports = app;

