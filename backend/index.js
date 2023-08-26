const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose")
const dotenv = require("dotenv").config()

const app = express()
app.use(cors())
app.use(express.json({limit : "10mb"}))

const PORT = process.env.PORT || 8080

//mongodb connection 
 console.log(process.env.MONGODB_URL)
mongoose.set(`strictQuery`, false);
mongoose.connect(process.env.MONGODB_URL)
.then(()=>console.log("Connect to the Database"))
.catch((err)=>console.log(err))

//schema
const userSchema = mongoose.Schema({
    firstName: String,
    lastName: String,
     email: {
            type: String,
            unique: true,
    },
    password: String,
    confirmPassword: String,
    image : String,
})

//
const userModel = mongoose.model("users",userSchema)

app.get("/",(req,res)=>{
    res.send("Server is running")
})

//api sign up
app.post("/signup",async(req,res)=>{
    console.log(req.body)
    const {email} = req.body

    const resultData = await  userModel.findOne({email : email})
     console.log(resultData)
     if(!resultData){
         const data = userModel(req.body)
                 const save = data.save()
                 res.send({message:"Successfully sign up", alert: true})
     }
     else{
         res.send({message: "Email id is already registered", alert : false})
     }
})

//api login
app.post("/login",(req,res)=>{
    console.log(req.body)
})

app.listen(PORT, ()=>console.log("server is running at port:"+ PORT))