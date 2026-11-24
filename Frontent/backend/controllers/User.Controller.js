const usermodel=require("../models/users.model");
const createUser= (req,res)=>{
    const {name,email,phone}=req.body
    if(!name||!email||!phone){
        alert("please enter all fields")
    }
usermodel.createUser(name,email,phone)
 return res.status(201).json({
            message: "User created successfully",
            user
        });
}
module.exports=createUser