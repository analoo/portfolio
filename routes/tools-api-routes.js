var db = require("../models");

module.exports = function (app) {

    app.post("/api/tools/new", (req, res) => {
        db.Tool.create(req.body, {
        }).then(result => {
            console.log(result)
            res.json(result.dataValues)
        }).catch(err => {
            res.json(err)
        })
    })

    app.get("/api/tools", (req, res) => {
        db.Tool.findAll({
        }).then(tool => {
            var renderedTool = []
            tool.forEach(element => {
                data = {
                    id: element.dataValues.id,
                    type: element.dataValues.type,
                    useCase: element.dataValues.useCase
                }
                renderedTool.push(data)
            })
            console.log(renderedTool);
            res.render("partials/projects/tools-block", { layout: false, tools: renderedTool })
        }).catch(err => {
            res.send(err);
        });
    });

    app.post("/api/projectTools/new", (req, res) => {
        console.log(`the request that came in is: ${req}`)
        db.ProjectTool.create({
            ProjectId: 1,
            ToolId: 1
        }
        // db.ProjectTool.bulkCreate([]
            ).then(result => {
            console.log(result)
            res.json(result.dataValues)
        }).catch(err => {
            console.log(err)
        })
    })


}