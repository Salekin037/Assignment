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