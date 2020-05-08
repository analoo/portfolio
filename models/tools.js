module.exports = function (sequelize, DataTypes) {
    var Tool = sequelize.define("Tool",
        {
            type: {
                type: DataTypes.STRING,
                allowNull: false,
                unique: true
            },

            useCase: {
                type: DataTypes.STRING,
                allowNull: true
            },
        });
    Tool.associate = models => {
        models.Tool.hasMany(models.ProjectTool, { onDelete: "cascade"});

    }

    return Tool
}