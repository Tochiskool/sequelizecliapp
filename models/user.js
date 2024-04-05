modules.exports = function(sequelize,DataTypes){
    var User = sequelize.define("User",{
        email:DataTypes.STRING,
        password:DataTypes.STRING
    });
    return User;
}

//make sure your database is created and run it actually with the lighting sign
// when you run the app a table with this colums will be created in the sequelize db that you created
// An Id will be set automatically with other data.