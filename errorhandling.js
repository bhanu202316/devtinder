const express = require('express');

const app = express();

app.use("/",(err,req,res,next)=>{
  if(err){
    //log your error 
    res.status(508).send("something is notwrong");
  }
})
   
 app.get('/userData' ,(req,res)=>{
   //Logic of DB call and gt user data
  //  try{
    throw new Error("fssd")
    res.send("user data send");

  //  }
  //  catch(err){
  //   res.status(508).send("smothing is went wrong");

  //  }
 })
  app.use("/",(err,req,res,next)=>{
  if(err){
    //log your error 
    res.status(508).send("something is wrong");
  }
 })
 

app.listen(3000 , () => {
    console.log("server is sucessfully ");
});

//proper way of writng error handling ... is try and catch