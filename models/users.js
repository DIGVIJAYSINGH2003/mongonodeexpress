const mongoose = require('mongoose');
const userschema = new mongoose.Schema({
     firstname:{
        type: String,
         
         required : true

     },
     lastname:{
         
         type: String,
         
         required :true
     }



});

module.exports= mongoose.model("user",userschema);

// first step
// sudo brew services start mongodb-community@5.0// restart to again start , stop to stop..
// mongo shell started by "mongo" command
// to shut down server
// use admin
// db.shutdownServer()


//do your work
//mongodb://127.0.0.1:27017/