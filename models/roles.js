module.exports = function (sequelize, DataTypes){
    var Role = sequelize.define("Role",
    {
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },

        roleStart: {
            type: DataTypes.STRING,
            allowNull: false
        },

        roleEnd: {
            type: DataTypes.STRING,
            allowNull: false
        }
    });

    Role.associate = models => {
        models.Role.belongsTo(models.Company, {
        });

        models.Role.hasMany(models.Experience, {

        });
    }

    return Role
}