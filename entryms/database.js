const mongoose=require("mongoose");
const validator=require("validator");
mongoose.connect(DB_LINK,{useNewUrlParser:true,
useCreateIndex:true,useUnifiedTopology:true,useFindAndModify: false}).then(()=>{
    console.log("User DB Connected")
}).catch((err)=>{
  console.log("Error occured");
    console.log(err)})
;
const userSchema=new mongoose.Schema({
    visitorName:{
       type:String,
       required:true 
    },
    visitorEmail:{
        type:String,
        required:true,
        validate:validator.isEmail
    },
    visitorPhone:{
        type:Number,
        required:true,
        minlength:10
    },
    hostName:{
        type:String,
        required:true 
     },
     hostEmail:{
         type:String,
         required:true,
         validate:validator.isEmail
     },
     hostPhone:{
         type:Number,
         required:true,
         minlength:10
     },
     checkInTime:{
         type:String,
         default:Date.now
     },
     checkOutTime:{
         type:String,
         default:"Pending"
     },
     date:{
         type:String,
         default:Date.now
     },
     officeAddress:{
         type:String,
         default:"Innovacer Office, Gautam Budh Nagar,Noida"
     }


    
})
const userModel=mongoose.model("userModel",userSchema);
module.exports=userModel;
