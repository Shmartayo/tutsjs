/*
    Use the Conditional (Ternary) Operator
    it's like a one line if else conditional statement
*/
// Check if two values are equal

function checkEqual(a,b){
    return a==b ? true : false;
}

checkEqual(1,1);

// A better way to write a equals function is
function checkEqual(a,b){
    return a===b;
}

/* Using Multiple Conditional (Ternary) Operators
    You can nest them within each other which even gives them
    more power
*/
/**
 * checkSign function
 * It's going to return the string "Positive" if the num that's passed into it is positive
 *  "Negative" if the num that's passed into it is negative
 * or Zero if the value passed in is zero
 * 
 */

function checkSign(num){
    return num > 0 ? "Positive" : num < 0 ? "negative" : num === 0 ? "Zero": "Nan";
}
checkSign(-1);