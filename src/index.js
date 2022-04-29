const express=require("express");

const connect=require("./config/db");
const {register,login}=require("./Controller/user.controller");
const forgetController=require("./Controller/forget.password")
const User=require("./model/user.model")
require("dotenv").config();
const app=express();
app.use(express.json());
app.post("/register",register);
app.post("/login",login);
app.use("/forget",forgetController);
let port=process.env.PORT||6000;
app.listen(port,async(req,res)=>{
    try{
        await connect();
        console.log(`listening to port ${port}`);
    }
    catch(e){
        console.log(e.message);
    }
})

 
