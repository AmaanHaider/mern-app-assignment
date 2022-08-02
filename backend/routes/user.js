const express = require("express")
const router = express.Router()



const {loginUser,signpUser}= require('../controllers/user.controller')

// login route

router.post('/login',loginUser)

// signup route

router.post('/signup',signpUser)


module.exports=router