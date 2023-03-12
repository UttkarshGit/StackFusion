const mongoose=require("mongoose");
const data=mongoose.Schema({
  name:String,
  dob:String,
  email:String,
  phone:String
})

module.exports=mongoose.model("stack_datas",data);