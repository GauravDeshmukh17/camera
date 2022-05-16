var detailForm = document.querySelector("#hostvisitorDetails");
var vname = document.getElementById("inputVisitorName");
var vemail = document.getElementById("inputVisitorEmail");
var vphoneno = document.getElementById("inputVisitorPhoneNumber");
var hname = document.getElementById("inputHostName");
var hemail = document.getElementById("inputHostEmail");
var hphoneno = document.getElementById("inputHostPhoneNumber");
var phoneNumberForm=document.getElementById('phoneNumberForm')
var checkoutNumber=document.getElementById('checkoutNumber')
var otpForm=document.getElementById('otpForm')
var OTP=document.getElementById('OTP')

var promise = new Promise(function (resolve, reject) {
  navigator.geolocation.getCurrentPosition(position => {
    resolve(position);
  });
})
async function address() {
  const position = await promise;
  // console.log(position);
  var lat = position.coords.latitude;
  var lng = position.coords.longitude
  console.log(lat)
  console.log(lng)
  var response = await axios.get(`https://reverse.geocoder.api.here.com/6.2/reversegeocode.json?app_id=pzHvyHxlO4VtQG6IFyMV&app_code=kJqGg033KFsMNOTGuM3dhA&mode=retrieveAddresses&prox=${lat},${lng},1`);
  // console.log(response);

  return response.data.Response.View[0].Result[0].Location.Address.Label
}
async function submitData(vnameVal, vemailVal, vphonenoVal, hnameVal, hemailVal, hphonenoVal, location) {
  const response = await axios.post("/details", {
    visitorName: vnameVal,
    visitorEmail: vemailVal,
    visitorPhone: vphonenoVal,
    hostName: hnameVal,
    hostEmail: hemailVal,
    hostPhone: hphonenoVal,
    officeAddress: location
  });
  if (response.data.result) {
    alert(`${vnameVal} just Checked In`);
  } else {
    alert("Visitor has already checked in before and hasn't checked out yet");
  }
  window.location.assign("/index.html");
}
if (detailForm) {
  detailForm.addEventListener("submit", async function (e) {
    e.preventDefault();
    const vnameVal = vname.value;
    const vemailVal = vemail.value;
    var vphonenumber="91"+vphoneno.value
    const vphonenoVal = parseInt(vphonenumber);
    const hnameVal = hname.value;
    const hemailVal = hemail.value;
    var hphonenumber="91"+hphoneno.value
    const hphonenoVal = parseInt(hphonenumber);
    const location = await address();
    submitData(vnameVal, vemailVal, vphonenoVal, hnameVal, hemailVal, hphonenoVal, location);
  })
}

async function verifyNumber(checkoutPhoneNumber){
  const responseData=await axios.post('/otp',{checkoutNumberVisitor:checkoutPhoneNumber});
  if(responseData.data.result){
    alert('A 6 digit OTP has been sent to you via SMS')
    window.location.assign('/otp.html')
  }else{
    alert("It seems you haven't checked in")
    window.location.assign('/index.html')
  }
}

if(phoneNumberForm){
  phoneNumberForm.addEventListener('submit',function(e){
    e.preventDefault()
    var checkoutNo="91"+checkoutNumber.value
    const checkoutPhoneNumber=parseInt(checkoutNo);
    verifyNumber(checkoutPhoneNumber)
  })
}

async function verifyOTP(OTPvalue){
  const responseJSON=await axios.post('/verifyotp',{
    otp:OTPvalue
  })
  if(responseJSON.data.result){
    alert('You have checked out successfully.See you soon')
    window.location.assign('/index.html')
  }else{
    alert('OTP entered is wrong.Please enter again')
    window.location.assign('/otp.html')
  }
}

if(otpForm){
  otpForm.addEventListener('submit',function(e){
    e.preventDefault()
    const OTPvalue=OTP.value
    verifyOTP(OTPvalue)
  })        
}
