var express = require("express");

var PORT = process.env.PORT || 8080;

var app = express();

app.use(express.static(__dirname+"/public"));

// Parse request body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Set Handlebars.
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");


app.get("/", function(req,res){
    res.render("index")
})

app.listen(PORT, function() {
  console.log("App now listening at localhost:" + PORT);
});
