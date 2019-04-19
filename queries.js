const mysql = require("mysql");
const pool = mysql.createPool({
    connLimit: 100,
    host: "localhost",
    user: "airports",
    password: "",
    database: "airports",
    debug: false
});

const getAirports = (req, res) => {
    pool.query("SELECT * FROM airports ORDER BY id ASC", (err, results) => {
        if (err) {
            return res.json({ "error": true, "message": err });
        }
        else {
            return res.json(results);
        }
    });
};

const getAirportById = (req, res) => {
    const id = parseInt(req.params.id);

    pool.query("SELECT * FROM airports WHERE id = ?", id, (err, results) => {
        if (err) {
            return res.json({ "error": true, "message": err });
        }
        else {
            return res.json(results);
        }
    });
};

const getAirportsByCity = (req, res) => {
    const city = req.params.city;

    pool.query("SELECT * FROM airports WHERE city = ?", city, (err, results) => {
        if (err) {
            return res.json({ "error": true, "message": err });
        }
        else {
            return res.json(results);
        }
    });
};

const getAirportsByCountry = (req, res) => {
    const country = req.params.country;

    pool.query("SELECT * FROM airports WHERE country = ?",
        country,
        (err, results) => {
            if (err) {
                return res.json({ "error": true, "message": err });
            }
            else {
                return res.json(results);
            }
        }
    );
};

const getAirportsByIATA = (req, res) => {
    const iata = req.params.iata;

    pool.query("SELECT * FROM airports WHERE IATA = ?",
        iata,
        (err, results) => {
            if (err) {
                return res.json({ "error": true, "message": err });
            }
            else {
                return res.json(results);
            }
        }
    );
};

const getAirportsByICAO = (req, res) => {
    const icao = req.params.icao;

    pool.query("SELECT * FROM airports WHERE ICAO = ?",
        icao,
        (err, results) => {
            if (err) {
                return res.json({ "error": true, "message": err });
            }
            else {
                return res.json(results);
            }
        }
    );
};

module.exports = {
    getAirports,
    getAirportById,
    getAirportsByCity,
    getAirportsByCountry,
    getAirportsByIATA,
    getAirportsByICAO
};