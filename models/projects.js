module.exports = function (sequelize, DataTypes){
    var Project = sequelize.define("Project",
    {
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },

        description: {
            type: DataTypes.TEXT,
            allowNull: true
        },

        githubRep: {
            type: DataTypes.STRING,
            allowNull: true
        },

        deployedLink: {
            type: DataTypes.STRING,
            allowNull: true
        },

        associatedImage: {
            type: DataTypes.STRING,
            allowNull: true,
            default: "#"
        },

        language: {
            type: DataTypes.STRING,
            allowNull: true
        }
    });

    Project.associate = models => {
        models.Project.hasMany(models.ProjectTool, { onDelete: "cascade"});
        models.Project.belongsTo(models.User, {
        });

        {foreignKey: 'fk_company'}

    }

    return Project
}