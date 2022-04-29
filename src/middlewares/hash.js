const bcrypt = require("bcryptjs");
module.exports=(req,res,next)=>{
    console.log(req)
    // var hash=bcrypt.hashSync(req.body.password,8);
    // req.body.password=hash;
    return next();
}