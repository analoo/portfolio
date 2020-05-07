var db = require("../models");

module.exports = function (app) {

    app.get("/api/:user/projects", (req, res) => {
        db.Project.findAll({
            include: [
                { model: db.Tool }]
        }).then(project => {
            var arrOfObjs = project.map(element => ({
                title: element.dataValues.title,
                description: element.dataValues.description,
                githubRep: element.dataValues.githubRep,
                deployedLink: element.dataValues.deployedLink,
                associatedImage: element.dataValues.associatedImage,
                language: element.dataValues.language,
                UserId: req.params.user,
                tools: element.dataValues.Tool
            }));

            var renderedApp = {
                layout: false,
                projects: arrOfObjs
            }

            res.render("partials/projects/project-block", renderedApp)
        }).catch(err => {
            res.send(err);
        });
    });

    app.get("/api/project/:projid", (req, res) => {
        db.Project.findOne({
            where: {
                id: req.params.projid
            }
        }).then(project => {
            res.json(project);
        }).catch(err => {
            res.json(err)
        });
    });

    app.post("/api/project/new", (req, res) => {
        db.Project.create({
            title: req.body.title,
            description: req.body.description,
            githubRep: req.body.githubRep,
            deployedLink: req.body.deployedLink,
            associatedImage: req.body.associatedImage,
            UserId: req.body.UserId,
            tools: [
                req.body.tools]
        },
            {
                include: db.Tools
            }).then(result => {
                console.log(result)
                res.json(result.dataValues)
            }).catch(err => {
                res.json(err)
            })
    })



    app.put("/api/project/:projid", (req, res) => {
        db.Project.update(req.body, {
            where: {
                id: req.params.projid
            },
        }).then(project => {
            res.JSON(project.dataValues);
        }).catch(err => {
            res.JSON(err)
        });
    });

    app.delete("/api/project/:projid", (req, res) => {
        db.User.destroy({
            where: {
                id: req.params.projid
            },
        }).then(result => {
            res.JSON(result);
        }).catch(err => {
            res.JSON(err)
        });
    });

    app.post("/api/tools/new", (req, res) => {
        db.Tool.create(req.body, {
        }).then(result => {
            console.log(result)
            res.json(result.dataValues)
        }).catch(err => {
            res.json(err)
        })
    })

}