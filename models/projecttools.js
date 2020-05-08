module.exports = function (sequelize, DataTypes){
	var ProjectTool = sequelize.define("ProjectTool",
	{
		name: {
			type: DataTypes.STRING,
			allowNull: true
		},

	
	});

	ProjectTool.associate = models => {
		models.ProjectTool.belongsTo(models.Tool, {onDelete: "cascade"
				});
		models.ProjectTool.belongsTo(models.Project, {onDelete: "cascade"
		});

	}

	return ProjectTool
}