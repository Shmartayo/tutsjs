/* 
    Conditionals- Making decisions with code
    Nesting
*/

let score = 80;

if(score >= 90) {
    if(score >= 98) {
        console.log("EXTRA CONGRATS, YOU GET AN A+");
    } else {
        console.log("YOU GOT AN A!");
    }
} else if (score >= 80){
    console.log("YOU GOT B!");
} else if (score >= 70){
    console.log("YOU GET A C!");
} else if (score >= 60){
    console.log("YOU GOT A D!")
} else {
    console.log("OU GET AN F");
}

