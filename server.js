var express = require("express");


var app = express();
var PORT = process.env.PORT || 3000;


app.use(express.static("public"));

var db = require("./models")
// Parse request body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Set Handlebars.
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Routes
require("./routes/api-routes")(app);
require("./routes/html-routes")(app);


db.sequelize.sync().then(function() {
  app.listen(PORT, function() {
    console.log("App now listening at localhost:" + PORT);
  });
})


