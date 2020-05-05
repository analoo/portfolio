module.exports = function (sequelize, DataTypes){
    var Experience = sequelize.define("Experience",
    {
        header: {
            type: DataTypes.STRING,
            allowNull: false
        },

        description: {
            type: DataTypes.STRING,
            allowNull: false
        },

        tag: {
            type: DataTypes.STRING,
            allowNull: true
        }
    });

    Experience.associate = models => {
        // models.Experience.hasOne(models.Role, {
        // });
    }

    return Experience
}