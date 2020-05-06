var db = require("../models");

module.exports = function (app) {

    app.get("/api/users", (req, res) => {
        db.User.findAll({
        }).then(users => {
            res.json(users)
        }).catch(err => {
            res.send(err);
        });
    });

    app.get("/api/users/:id", (req,res) => {
        db.User.findOne({
            where:{
                id : req.params.id
            }
        }).then(user => {
            res.json(user);
        }).catch(err => {
            res.json(err)
        });
    });

    app.post("/api/users/new", (req,res) => {
        db.User.create(req.body, {
        }).then (result =>{
            res.json(result.dataValues)
        }).catch (err => {
            res.json(err)
        })
    })
    
    app.put("/api/users/:id", (req,res) => {
        db.User.update(req.body,{
            where: {
                id: req.params.id
            },
        }).then(user => {
            res.JSON(user.dataValues);
        }).catch(err => {
            res.JSON(err)
        });
    });

    app.delete("/api/users/:id", (req,res) => {
        db.User.destroy({
            where: {
                id: req.params.id
            },
        }).then(result => {
            res.JSON(result);
        }).catch(err => {
            res.JSON(err)
        });
    });

}