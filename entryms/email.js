"use strict";
const nodemailer = require("nodemailer");

// async..await is not allowed in global scope, must use a wrapper
module.exports=async function (emailID,emailBoolean,visitorHostInformation) {
  // Generate test SMTP service account from ethereal.email
  // Only needed if you don't have a real mail account for testing
  let testAccount = await nodemailer.createTestAccount();

  // create reuszable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
      service:"gmail",
    host: "smtp.gmail.com",
    auth: {
      user: "deebindal@gmail.com", // generated ethereal user
      pass: "owadwqeniplpkvog" // generated ethereal password
    }
  });
var subject,text,html;
 if(emailBoolean){
    subject='You have a visitor'
    text=` Hello ${visitorHostInformation.hostName}!
   You have a Visitor.Below are the details of the visitor-
   Name - ${visitorHostInformation.visitorName}
   Email - ${visitorHostInformation.visitorEmail}
   Phone - ${visitorHostInformation.visitorPhone}
   Checkin Time - ${visitorHostInformation.checkInTime}
`
 html=`
<b> Hello ${visitorHostInformation.hostName}!</b>
<p> You have a Visitor.Below are the details of the visitor-</p>
<table>
<tr>
<td>Name</td><td>-</td><td>${visitorHostInformation.visitorName}</td>
</tr>
<tr>
<td>Email</td><td>-</td><td>${visitorHostInformation.visitorEmail}</td>
</tr>
<tr>
<td>Phone</td><td>-</td><td>${visitorHostInformation.visitorPhone}</td>
</tr>
<tr>
<td>Checkin Time</td><td>-</td><td>${visitorHostInformation.checkInTime}</td>
</tr>
</table>
`
 }else{
    subject="See you soon..."
    text=`
   Hope you had a good time ${visitorHostInformation.visitorName}!
   Here are your visit details-
   Name - ${visitorHostInformation.visitorName}
 Phone - ${visitorHostInformation.visitorPhone}
 Check-in time - ${visitorHostInformation.checkInTime}
 Check-out time - ${visitorHostInformation.checkOutTime}
 Host name - ${visitorHostInformation.hostName}
 Address visited - ${visitorHostInformation.officeAddress}
   `
    html=`
   <b>Hope you had a good time ${visitorHostInformation.visitorName}!</b>
<p>  Here are your visit details-</p>
<table>
<tr>
<td>Name</td><td>-</td><td>${visitorHostInformation.visitorName}</td>
</tr>
<tr>
<td>Phone</td><td>-</td><td>${visitorHostInformation.visitorPhone}</td>
</tr>
<tr>
<td>Checkin Time</td><td>-</td><td>${visitorHostInformation.checkInTime}</td>
</tr>
<tr>
<td>Checkout Time</td><td>-</td><td>${visitorHostInformation.checkOutTime}</td>
</tr>
<tr>
<td>Host Name</td><td>-</td><td>${visitorHostInformation.hostName}</td>
</tr>
<tr>
<td>Address Visited</td><td>-</td><td>${visitorHostInformation.officeAddress}</td>
</tr>
</table>
   `
 }

  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: '"Summer Geeks" <deebindal@gmail.com>', // sender address
    to: emailID, // list of receivers
    subject: subject, // Subject line
    text:text, // plain text body
    html: html // html body
  });

  console.log("Message sent: %s", info.messageId);
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
}
