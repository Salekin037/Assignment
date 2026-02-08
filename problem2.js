function validOtp(otp){
if (typeof otp !== "string") {
    return "Invalid";
}
if (otp.length !== 8) {
    return false;
}
if (otp.startsWith("ph-")){
    return true;
}
else{
    return false;
}
}
// let output = validOtp("ph-1234");
// console.log(output);
