const express = require('express');

const app = express();

//request handler function

app.use("/",(req,res) => {
    res.send("hello from home");
})

app.use("/hello",(req ,res)=>{
    res.send("hello this is response from the hello route")
})
app.use("/test",( req,res)=> {
    res.send("hello from the server ")
})
app.listen(3000 , () => {
    console.log("server is sucessfully ");
});



