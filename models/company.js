module.exports = function (sequelize, DataTypes){
    var Company = sequelize.define("Company",
    {
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },

        location: {
            type: DataTypes.STRING,
            allowNull: true
        }
    });

    Company.associate = models => {
        models.Company.hasMany(models.Role, {
        })
    }

    return Company
}