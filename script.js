/*
    Use the parseInt() Function
    Which takes a string and converts it to an integer
*/
function convertToInteger(str){
    return parseInt(str);
}

convertToInteger("5");

/**
 * Use the parseInt Function with a Radix
 * A Radix specifies the base of a number in a string such as
 * base 2, base 7, etc.
 */

function convertToIntegerFromBinary(str){
    return parseInt(str,2);
}

convertToIntegerFromBinary("10011");

