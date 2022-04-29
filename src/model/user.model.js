const mongoose=require("mongoose");
//api username and password with unique id(email id)
const userSchema=new mongoose.Schema({
    user_name:{type:String,required:true},
    email:{type:String},
    phone:{type:Number},
    password:{type:String,required:true},
},{
    versionKey:false,
    timestamps:true
})

module.exports=mongoose.model("user",userSchema);

