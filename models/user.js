module.exports = function (sequelize, DataTypes){
    var User = sequelize.define("User",
    {
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate :{
                isEmail: true
            }
        },

        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },

        phone: {
            type: DataTypes.STRING,
            allowNull: true
        },

        github: {
          type: DataTypes.STRING,
          allowNull: true  
        },

        linkedIn: {
            type: DataTypes.STRING,
            allowNull: true
        },

        aboutMe: {
            type: DataTypes.TEXT,
            allowNull: true
        },


    });

    User.associate = models => {
        models.User.hasMany(models.Role, 
            {foreignkey: "id"}, {onDelete: "cascade"}
        );

        models.User.hasMany(models.Project, 
            {foreignkey: "id"}, {onDelete: "cascade"}
        );
    }

    return User
}