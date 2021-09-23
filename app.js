// imports>>>>>>>
const express= require('express');
const app= express();
const mongoose= require('mongoose');
const languagesrouter= require('./routes/languages.js');
const dotenv= require("dotenv");
const port = process.env.PORT || 5000;
const User= require("./models/users.js");
// middlewares>>>>>>>
app.use(express.static('./public'));
app.use(express.urlencoded({extended:false}));// take req object as string or arrays..
app.use(express.json());// parses th json
app.use("/languages",languagesrouter);
// to set view engines >>>>>>>
app.set('view engine','ejs');//this is to tell express which view engine we are using


 dotenv.config();
 const uri = process.env.db;
mongoose.connect(uri,{useNewUrlParser:true},()=>{
    
});// useNewUrlParser to avoid deprecation warnings means features in url parser will changed or removed but to use new url parser we use useNewUrlParser argument.....

 const con = mongoose.connection;
 con.on("open",function(){
    console.log("connected");
 });





// how to render that .ejs file???



app.get('/',(req,res,next)=>{
    res.render('index');// res.render is used to render view engine files 
     next();
   
});
app.post('/',async(req,res,next)=>{
       

   const userva = new User({
         firstname: req.body.fname,
        lastname: req.body.lname
     });
     const saveduser = await userva.save();
//    res.send(saveduser);
   try{
console.log("pass");
res.redirect("/languages");

   }
   catch{
       console.log("fail");
   }

   
    
});




app.listen(port,()=>{
    console.log(`server is running on ${port} `);
});




 