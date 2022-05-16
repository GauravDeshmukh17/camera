module.exports=function(){
var today = new Date();
var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
var month=today.getMonth()+1
var todayDate=today.getDate()+"-"+month+"-"+today.getFullYear()
return {time,todayDate}
}