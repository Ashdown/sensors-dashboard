let express = require("express");
let app = express();

app.set("port", (process.env.PORT || 3000));

app.get("/sensors", function (req, res) {
    let sensorsData = require("./data/sensors.json");
    res.send(sensorsData);
});

app.listen(app.get("port"), function () {
    console.log("Node app is running on port", app.get("port"));
});

module.exports = app;

