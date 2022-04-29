const express=require("express");

const connect=require("./config/db");
const {register,login}=require("./Controller/user.controller");
const forgetController=require("./Controller/forget.password")
const User=require("./model/user.model")
const app=express();
app.use(express.json());
app.post("/register",register);
app.post("/login",login);
app.use("/forget",forgetController);
app.listen(6000,async(req,res)=>{
    try{
        await connect();
        console.log("listening to port 6000");
    }
    catch(e){
        console.log(e.message);
    }
})

 
