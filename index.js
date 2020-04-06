const express = require("express");
//Body parser para transformar un objeto a json
const bodyParser = require("body-parser");
const path = require("path");
const contactAPI = require(path.join(__dirname,"contactAPI"));
//Para coger la variable puerto que te den, sino la 80
const port = process.env.PORT || 80;
//Express para el servidor
const app = express();
app.use(bodyParser.json());
contactAPI(app);
app.use("/",express.static("./public"));
app.listen(port, () => {
	console.log("Server ready");
});

console.log("Stating server...");