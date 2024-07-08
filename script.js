/* 
    Logical Operators- AND
*/

let password = "catdog";

if (password.length >= 6 && password.indexOf(" ") !== -1){
    console.log('Password must not contain spaces!');
} else {
    console.log("Password is valid!");
}