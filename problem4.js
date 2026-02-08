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