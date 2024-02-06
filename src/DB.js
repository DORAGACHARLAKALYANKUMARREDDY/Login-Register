const express=require("express");
const app=express();
const mongoose=require("mongoose");
const cors=require("cors");
app.use(cors());
app.use(express.json());

const mongoUrl="mongodb+srv://kalyan:kalyan@cluster0.7jkboid.mongodb.net/"
mongoose.connect(mongoUrl,{
  useNewUrlParser:true,
}).then(()=>{
  console.log("connected to database");
}).catch((e)=>{
  console.log(e);
})
require("./RegisterDetails.js")

const User=mongoose.model("RegisterDetails")
app.post("/registration",async(req,res)=>{
  const {uname,email,pwd}=req.body;
  try{
      await User.create({
        uname,
        email,
        pwd,
      });
      res.send({status:"ok"})
  }
  catch(e){
    res.send({status:"error"})
  }
})
app.get('/',(req,res)=>{
    res.send()
})
app.listen(5000,()=>{
  console.log("server started")
})