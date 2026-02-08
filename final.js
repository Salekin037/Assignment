// New Price for Eid Sale
function newPrice(currentPrice, discount){
  const discountPrice = currentPrice - (currentPrice * discount / 100);  
  return discountPrice.toFixed(3);
if (typeof currentPrice !== 'number' || typeof discount !== 'number') {
        return 'Invalid';
}
 
else if (discount < 0 || discount > 100) {
      return 'Invalid'
}
}
// let output = newPrice(2500, 20);
// console.log(output);


// OTP check
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

// OMR Check
function finalScore(omr){
    if (typeof omr !== 'object'){
        return 'Invalid';
    }
    const right = omr['right'];
    const wrong = omr['wrong'];
    const skip = omr['skip'];
    const totalMarks = right+wrong+skip;

    if (totalMarks !== 100){
        return 'Invalid';
    }
  
    let result = (right*1)-(wrong*0.5);
    let score = Math.round(result);
    return score;

}
// let marks = finalScore({ right: 50, wrong: 40, skip: 10 })
// console.log(marks);

// gonoVote

function gonoVote (array){
    if (Array.isArray(array) === false){
        return 'Invalid';
    }
    let haVoteCount = [];
    let naVoteCount = [];

    for (let vote of array) {
        if (vote === 'ha'){
            haVoteCount++;
        }
        else if(vote === 'na'){
            naVoteCount++;
        }
    }
    if(haVoteCount > naVoteCount){
        return true;
    }
    else if(haVoteCount === naVoteCount){
        return 'equal';
    }
    else{
        return false;
    }

}
// let votes = gonoVote(["ha", "na", "ha", "na"]);
// console.log(votes);