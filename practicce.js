const express = require('express');

const app = express();

//request handler function
// app.use("/user",[rh1,rh2],rh3,rh4) this is also right
app.get("/user",(req,res, next) => {
    res.send("response")  
    next();
})
app.get("/user",(req,res,next)=>{
    console.log("this is second response ");
    res.send("yo i m second response");    
})


// app.use("/hello",(req ,res)=>{
//     res.send("hello this is response from the hello route")
// })
// app.use("/test",( req,res)=> {
//     res.send("hello from the server ")
// })
app.listen(3000 , () => {
    console.log("server is sucessfully ");
});



const express = require('express');

const app = express();

//request handler function
// app.use("/user",[rh1,rh2],rh3,rh4) this is also right
app.get("/user",(req,res, next) => {
    res.send("response")  
    next();
})
app.get("/user",(req,res,next)=>{
    console.log("this is second response ");
    res.send("yo i m second response");    
})


// app.use("/hello",(req ,res)=>{
//     res.send("hello this is response from the hello route")
// })
// app.use("/test",( req,res)=> {
//     res.send("hello from the server ")
// })
app.listen(3000 , () => {
    console.log("server is sucessfully ");
});
