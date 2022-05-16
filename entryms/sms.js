const Nexmo = require('nexmo');

const nexmo = new Nexmo({
    apiKey: API_KEY,
    apiSecret: API_SECRET,
});
// insert your nexmo credentials here
module.exports = (to, smsBoolean, visitorHostInformation, otp) => {
    var text;
    if (smsBoolean) {
         text = `Hello ${visitorHostInformation.hostName}!
You have a Visitor.Below are the details of the visitor-
Name - ${visitorHostInformation.visitorName}
Email - ${visitorHostInformation.visitorEmail}
Phone - ${visitorHostInformation.visitorPhone}
Checkin Time - ${visitorHostInformation.checkInTime}`
    } else {
         text = `Your 6 digit OTP is ${otp}`
    }
    const from = MOBILE_NUMBER;
    nexmo.message.sendSms(from, to, text)
}
