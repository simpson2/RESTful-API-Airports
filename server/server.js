const express = require("express");
const routes = require("../routes/routes.js");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.json()); // JSON support
app.use(                    // URL support
    bodyParser.urlencoded({
        extended: true,
    })
);

routes(app);

let port = process.env.PORT;
if (port == null || port == "") {
    port = 8080;
}
app.listen(port, () => {
    console.log("App running on port " + port);
})