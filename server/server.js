const express = require("express");
const routes = require("../routes/routes.js");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.json());
app.use(
    bodyParser.urlencoded({
        extended: false,
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