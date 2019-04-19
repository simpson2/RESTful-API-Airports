const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const db = require("./queries");

app.use(bodyParser.json());
app.use(
    bodyParser.urlencoded({
        extended: false,
    })
);

app.get("/", (req, res) => {
    res.json({ info: 'Node.js, Express, and MariaDB API' })
});

app.get("/airports", db.getAirports);
app.get("/airports/id/:id", db.getAirportById);
app.get("/airports/city/:city", db.getAirportsByCity);
app.get("/airports/country/:country", db.getAirportsByCountry);
app.get("/airports/iata/:iata", db.getAirportsByIATA);
app.get("/airports/icao/:icao", db.getAirportsByICAO);


let port = process.env.PORT;
if (port == null || port == "") {
    port = 8080;
}
app.listen(port, () => {
    console.log("App running on port " + port);
})