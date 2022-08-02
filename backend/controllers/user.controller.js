const User = require('../models/userModel')

//login user

const loginUser=async(req,res)=>{

    res.json({msg:"login user"})

}

//singup user

const signpUser=async(req,res)=>{
    res.json({msg:"signup user"})
}

module.exports={loginUser,signpUser}