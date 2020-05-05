module.exports = function (sequelize, DataTypes){
    var Tool = sequelize.define("Tool",
    {
        type: {
            type: DataTypes.STRING,
            allowNull: false
        },

        useCase: {
            type: DataTypes.STRING,
            allowNull: true
        },
    });


    return Tool
}