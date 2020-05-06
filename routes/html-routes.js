var db = require("../models");

module.exports = function (app) {

    app.get("/", function (req, res) {
        res.render("index")
    });

    app.get("/about", function (req, res) {
        // app.get("/api/users/:id", (req,res) => {
        db.User.findOne({
            where: {
                id: 1
            }
        }).then(user => {
            console.log(user.dataValues)
            res.render("about-me", user.dataValues);
        }).catch(err => {
            res.json(err)
        });
        // });
    });

    app.get("/portfolio", function (req, res) {
        res.render("portfolio")
    });



    app.get("/resume", function (req, res) {
        res.render("resume")
    });

    app.get("/users", function (req, res) {
        res.render("user-admin")
    });

    app.get("/projects", function (req, res) {
        res.render("projects-admin")
    });

}