const express = require('express');

const app = express();

const {adminAuth,userAuth} = require('./middleware/auth')
//handle auth midleware for all the request get , post.
 app.use("/admin", adminAuth);
   
 app.get('/user',userAuth ,(req,res,next)=>{
   res.send("user data send");
   next()
 })
 app.get('/admin/getAllData',(req,res, next)=>{
   //check if the request is actually authenticated
   //logic of checking
    res.send("all data send ")
    next();

 })
 app.get('/admin/deleteAllData',(req,res)=>{
   //logic of checking of request
    res.send("deleted all data ")

 })
app.listen(3000 , () => {
    console.log("server is sucessfully ");
});

