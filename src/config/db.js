//api username and password with unique id(email id)
const mongoose=require("mongoose");
require("dotenv").config();
module.exports=()=>{
  return  mongoose.connect(process.env.mongoURI);
}

