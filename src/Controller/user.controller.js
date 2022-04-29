require("dotenv").config();
const User=require("../model/user.model");

const register=async(req,res)=>{
    try{
        let user
        // console.log(req.body)
        if(req.body.email){
            user=await User.findOne({email:req.body.email})  
        }else{
            user=await User.findOne({phone:req.body.phone})
        }
         
        if(user){
            return res.send("Use another Email or mobile To login")
        }
        user=await User.create(req.body);
        res.status(201).send(user);
    }
    catch(e){
        res.status(500).send(e.message);
    }
}

const login=async (req,res)=>{
    try{
        let user;
        if(req.body.email){
            user=await User.findOne({email:req.body.email})  
        }else{
            user=await User.findOne({phone:req.body.phone})
        }
        if(!user){
            return res.status(404).send("email or password incorrect");
        }

     res.status(200).send(user)
    }
    catch(e){
        res.status(500).send(e.message);
    }
}

module.exports={register,login}