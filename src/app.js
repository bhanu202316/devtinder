const express = require('express');
const connectDB = require('./config/database')
const app = express();
const User  = require("./models/user")

app.use(express.json());
app.post("/signup", async (req,res)=>{
  
  //creating a new instance of the user model
  const user = new User(req.body)
  //   firstName:  "rahul",
  //   lastName: "roy",
  //   emailId: "rahul@roy.com",
  //   password : "rauroy@1000",
    
  // });
  
  try{ 
  await user.save();
  res.send("user added succssfully")
}
catch (err){
  res.status(400).send("user not added ",+err.message)
}});

connectDB().then(()=>{
    console.log("database connection established")
    app.listen(3000 , () => {
      console.log("server is sucessfully ");
 });

})
.catch((err)=>{
    console.error("databse connot connected")
});


//proper way of writng error handling ... is try and catch

