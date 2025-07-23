const express = require('express');
const connectDB = require('./config/database')
const app = express();
const User  = require("./models/user");
const user = require('./models/user');

app.use(express.json());
app.post("/signup", async (req,res)=>{
  
  //creating a new instance of the user model
  const user = new User(req.body)
  //   firstName:  "rahul",
  //   lastName: "roy",
  //   emailId: "rahul@roy.com",
  //   password : "rauroy@1000",
});
app.get('/user', async (req,res)=>{
  const userEmail = req.body.emailId;

  try{
    const user = await User.findOne({emailId: userEmail});
    if(!user){
      res.status(404).send("user not found");
    }
    else{
      res.send(user);

    }
  //   const user =  await User.find({emailId: userEmail});
  //   if(user.length === 0){
  //     res.status(404).send("user not found")
  //   }
  //   else{
  //     res.send(user)
  //   }   
  }
  catch(err){
    res.status(400).send("something went wrong")
  }
})

  // find user by emial 
app.get("/feed", async(req,res)=>{
  try{
    const users = await User.find({});
    res.send(users)
  }
  catch(err){
    res.status(400).send("something went wrong");
  }
});

app.delete("/user",async(req,res)=>{
  const userId = req.body.userId;
  try{
    // const user= await User.findByIdAndDelete({_id:userId});
    const user= await User.findByIdAndDelete({userId});
// both the approaches for deletion are correct
    res.send("user deleted successfully");
  }
  catch(err){
    res.status(400).send("something went wrong")
  }
});

//update data of the user 

app.patch("/user", async(req,res)=>{
  const userId = req.body.userId;
  const data = req.body;
  try{
    const user  = await User.findByIdAndUpdate({_id: userId},data,{returnDocument: 'after'});
    console.log(user)
    res.send("data updated successfully");
  }
  catch(err){
    res.status(400).send("something went wrong")

  }

})
connectDB().then(()=>{
    console.log("database connection established")
    app.listen(3000 , () => {
      console.log("server is sucessfully ");
 });

})
.catch((err)=>{
    console.error("databse connot connected")
});


//proper way of writng error handling ... is try and 