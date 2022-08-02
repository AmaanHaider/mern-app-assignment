require('dotenv').config()
const express = require("express")

const mongoose = require('mongoose')
const userRoutes= require('./routes/user')

const app = express()

app.use((req,res,next)=>{
    console.log(res.path,req.path)
    next()
})

app.use('/api/user',userRoutes)

// app.use('/api/login',userRoutes)

app.get('/',(req,res)=>{
    res.json({msg:"welcome to app"})
})


mongoose.connect(process.env.MONG_URI)
.then(()=>{

    app.listen(process.env.PORT,()=>{
        console.log("connected to db and port",process.env.PORT)
    })

})
.catch((error)=>{
    console.log(error)
})


