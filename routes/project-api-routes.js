var db = require("../models");

module.exports = function (app) {

    app.get("/api/:user/projects", (req, res) => {
        db.Project.findAll({
        }).then(project => {           
            var arrOfObjs = project.map(element => ({
                title: element.dataValues.title,
                description: element.dataValues.description,
                githubRep: element.dataValues.githubRep,
                deployedLink: element.dataValues.deployedLink,
                associatedImage: element.dataValues.associatedImage,
                language: element.dataValues.language

            }));
           
            var renderedApp = {
                layout: false,
                projects: arrOfObjs
            }

            // projects = {
            //     title: project.dataValues.tile,
            //     description: project.dataValues.description,
            //     githubRep: project.dataValues.githubRep,
            //     deployedLink: project.dataValues.deployedLink,
            //     associatedImage: project.dataValues.associatedImage,
            //     language: project.dataValues.language,
            // }
            res.render("partials/projects/project-block",renderedApp)
            // res.json(project)
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

    app.post("/api/:userid/project/new", (req, res) => {
        db.Project.create(req.body, {
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

}