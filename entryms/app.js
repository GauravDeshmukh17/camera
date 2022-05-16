const express = require('express')
const path = require('path')
var generateOtp = require('./otp')
var sendMail = require('./email')
var sendSMS = require('./sms')
var getTime = require('./getTime')
const userModel=require("./database");
var smsBoolean=null;
var emailBoolean=null;
const app = express()
var OTP = null;
var to=null;

app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(express.json());
app.set("view engine","pug");

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + "/public/index.html"))
})

app.post('/details',async function (req, res) {
    const { hostEmail, hostPhone,officeAddress,visitorPhone } = req.body
    var visitor=await userModel.findOne({visitorPhone:visitorPhone,checkOutTime:'Pending'})
    if(!visitor){
    const { time, todayDate } = getTime()
    req.body.date=todayDate
    req.body.checkInTime = time
    req.body.officeAddress=officeAddress
    smsBoolean = 1
    emailBoolean=1
    const user=await userModel.create(req.body)
    sendSMS(hostPhone, smsBoolean, req.body,null)
    sendMail(hostEmail,emailBoolean,req.body)
    res.json({result:"Checked In"});}
    else{
        res.json({result:null})
    }
})

app.get('/checkout', function (req, res) {
    res.sendFile(path.join(__dirname + "/public/checkout.html"))
})

app.post('/otp',async function (req, res) {
    to = req.body.checkoutNumberVisitor
    var visitorHostInformation=await userModel.findOne({
        visitorPhone:to,checkOutTime:'Pending'
    })
    if(visitorHostInformation){
        OTP = generateOtp()
        console.log(OTP)
    smsBoolean=0
    sendSMS(to,smsBoolean,visitorHostInformation,OTP)
    res.json({result:"User found"})
    }else{ 
    res.json({result:null})}
})

app.post('/verifyotp',async function (req, res) {
  if(req.body.otp==OTP){
      const query={visitorPhone:to,checkOutTime:'Pending'}
      const {time}=getTime()
     await userModel.findOneAndUpdate(query,{checkOutTime:time})
  var user=await userModel.findOne({visitorPhone:to,checkOutTime:time})
  emailBoolean=0
     sendMail(user.visitorEmail,emailBoolean,user)
     res.json({result:"otp entered is correct"})
  }else{
      res.json({result:null})
  }
})

app.get('/dashboard',async function(req,res){
   const users=await  userModel.find();
    res.render("index",{users});
     
})
 const port=process.env.PORT||3000;
app.listen(port, function () {
    console.log("server has started at port 3000")
})