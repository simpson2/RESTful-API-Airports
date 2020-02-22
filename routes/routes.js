const db = require("../queries.js");

var appRoutes = (app) => {
    
    app.get("/", db.home);
    app.get("/airports", db.getAirports);
    app.get("/airports/id/:id", db.getAirportById);
    app.get("/airports/city/:city", db.getAirportsByCity);
    app.get("/airports/country/:country", db.getAirportsByCountry);
    app.get("/airports/iata/:iata", db.getAirportsByIATA);
    app.get("/airports/icao/:icao", db.getAirportsByICAO);
}

module.exports = appRoutes;