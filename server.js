var express = require("express");


var app = express();
var PORT = process.env.PORT || "production";


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
require("./routes/user-api-routes")(app);
require("./routes/project-api-routes")(app);
require("./routes/tools-api-routes")(app);

require("./routes/html-routes")(app);


db.sequelize.sync().then(function() {
  app.listen(PORT, function() {
    console.log("App now listening at localhost:" + PORT);
  });
})


