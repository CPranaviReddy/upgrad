function evennum(x) {

    // if number is 
    if (x === 2) {
        return 2;
    }

    // if number is positive
    else {
        return x * evennum(x - 1);
        
    }
}
console.log(evennum);