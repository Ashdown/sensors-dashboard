let express = require("express");
let app = express();

let static_directory = "//localhost:4000/static/";

if(process.env.NODE_ENV === "production") {
    static_directory = "/";
} else {
    require("./dev-server");
}

app.set("port", (process.env.PORT || 3000));

app.get("/", function(req, res) {
    res.render("index.ejs", {static_directory: static_directory});
});

app.get("/sensors", function (req, res) {
    let sensorsData = require("./data/sensors.json");
    res.send(sensorsData);
});

app.get("/sensor/:sensorid", function(req, res) {

    let allData = require("./data/data.json");
    let sensorId = req.params.sensorid;

    let responseData = [];

    for(let data of allData) {
        if(data.sensorId === sensorId) {
            responseData.push(data);
        }
    }
    res.send(responseData);
});

app.listen(app.get("port"), function () {
    console.log("Node app is running on port", app.get("port"));
});

module.exports = app;

