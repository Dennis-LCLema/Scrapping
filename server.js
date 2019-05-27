var express = require("express");
var mongoose = require("mongoose");
var exphbs = require("express-handlebars");

var PORT = process.env.PORT || 3000;

var app = express();
app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use(express.static("public"));

app.engine("handlebars", exphbs({defaultLayout: "main"}));
app.set("views engine", "handlebars");

var routes = require("./routes");
app.use(routes);

var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/mongoDB_headlines";
mongoose.connect(MONGODB_URI, { useNewUrlParser: true});

app.listen(PORT, () => console.log(`listening on http://localhost:${PORT}`));
    
