require('./Connect')
const express=require('express');

const Schema_cart=require('./Schema');
const app=express();
var cors = require('cors')
app.use(express.json());
app.use(cors());
app.post('/send_data',async(req,res)=>{
    let phone_data=""+req.body.phone;
    var phoneno = /^\d{10}$/;
    if(phone_data.match(phoneno))
    {
        const s_data=new Schema_cart(req.body);
        const send_value= await s_data.save();
        res.send(req.body);
    }
   else{
    res.send({"error":"not matched"});
   }
   
})

app.get('/get_data',async(req,res)=>{
    const val=await Schema_cart.find({});
    res.send(val);
})
app.listen(5000);