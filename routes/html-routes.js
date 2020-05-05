var db = require("../models");

module.exports = function (app) {

app.get("/", function(req,res){
    res.render("index")
});

app.get("/portfolio", function (req,res){
    res.render("portfolio")
});

app.get("/resume", function (req,res){
    res.render("resume")
});

app.get("/users", function (req,res){
    res.render("user-admin")
});

}