/**Difference between let and var
 * Let does not allow you define a variable twice in the same scope
 *  "use strict" - This enables strict mode in writing javaScript code
 *  which catches common coding mistakes and unsafe actions
 * (alot of people use "use strict" in a whole javaScript file or inside a function
 * to catch coding mistakes)
 * 
*/ 

/** Compare Scopes of the var and let Keywords
 * When you declare a variable with "var" it is declared globally
 * Or locally when it's declared inside a function
 * However, the scope of let is limited to the block statement
 * or expression
*/
// var keyword scope
function checkScope(){
    "use Strict"
    let i = "function Scope";
    if(true){
        i = "block Scope";
        console.log("Block Scope i is: " , i);
    }
    console.log("Function Scope i is: ", i);
    return i;
}

checkScope();

//let keyword scope 
function checkScope(){
    "use Strict"
    let i = "function Scope";
    if(true){
        let i = "block Scope";
        console.log("Block Scope i is: " , i);
    }
    console.log("Function Scope i is: ", i);
    return i;
}

checkScope();