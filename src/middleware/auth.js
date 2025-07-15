const adminAuth = (req,res,next)=>{
   const token = "xyc453"
   const isAdminAuthorized = token === "xyc453"
   if(!isAdminAuthorized){
      res.status(401).send("unauthorized request");

   }
   else{
      next()
   }
 }

 const userAuth = (req,res,next)=>{
   const token = "xyc453"
   const isAdminAuthorized = token === "xyc4537"
   if(!isAdminAuthorized){
      res.status(401).send("unauthorized request");

   }
   else{
      next()
   }
 }

 module.exports = {
    adminAuth,userAuth,
 }