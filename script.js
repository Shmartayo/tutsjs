/**        Mutate an Array Declared with const
 * While you can't reassign a variable declared with const,
 * you can mutate an array (We can update the array using
 * bracket notation).
*/
const s = new Array(5,7,2);

function editInPlace(){
    s[0] = 2;
    s[1] = 5;
    s[2] = 7;
}

editInPlace();
console.log(s);