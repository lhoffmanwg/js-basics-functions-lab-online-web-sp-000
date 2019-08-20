// Code your solution in this file!
function distanceFromHqInBlocks(n) {
    if (n > 42){
        return n - 42
    } 
    else if (n < 42){
        return 42 - n
    }
}

function distanceFromHqInFeet(n){
    if (n > 42){
        return (n - 42) * 264
    }
   else if (n < 42){
        return (42 - n) * 264
    }
}

function distanceTravelledInFeet(start, destination){
    if (start > destination){
        return (start-destination)*264
    }
    else if (start < destination){ 
        return (destination - start)*264
    }
}

function calculatesFarePrice(start, destination){
    let result = 0
    if (start < destination){
        result = (destination - start) * 264
    }
    else if (start > destination){
        result = (start - destination) * 264
    }
    if (result > 400 && result < 2001) {
        return (result - 400) * .02 
    }
    else if (result > 2000 && result < 2500){
        return 25
    }
    else if (result >= 2500){
        return 'cannot travel that far'
    }
    else if (result <= 400)
        return 0
}