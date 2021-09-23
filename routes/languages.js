const router= require('express').Router();
// const languages=require('../views/languages.ejs');


router.get("/",(req,res,next)=>{
      
    res.send("languages");

})



module.exports=router;