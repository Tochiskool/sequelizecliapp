// Dependencies

const express = require("express");
const db = require("./models");


// Setup the express app
const app = express();
const PORT = process.env.PORT || 8080;

//Starts the server to begin listening

db.sequelize.sync().then(function(){
    app.listen(PORT,()=>{
        console.log("App listening on PORT" + PORT)
    });
});