//Switch Statememt

//It won't work becase switch statements are used to
// only check the equality or not equality of conditions
// solution is to remove the signs and leave the numbers.
// const dispResult = val =>{
//     let answer = "";

//     switch (val) {
//         case val>= 90: 
//             answer = "A+";
//             break;
//         case val >= 80 : 
//             answer= "A";
//             break;
//         case val >= 70:
//             answer = "B+";
//             break;
//         case val >= 60: 
//             answer = "B";
//             break;
//         case val >= 50: 
//             answer = "c";
//             break;
//         case val < 40: 
//             answer = "F";
//             break;

//         default:
//             answer = "Invalid Score";
//             break;
//     }

//     return answer;
// }

// console.log(dispResult("hello"));

// const chainToSwitch = val => {
//     let answer = "";

//     if(val === "bob") {
//         answer = "Marley";
//     } else if(val === 42){
//         answer = "The Answer";
//     } else if(val === 1) {
//         answer = "There is no #1";
//     } else if (val === 99) {
//         answer = "Missed me by this much!";
//     } else if (val === 7) {
//         answer = "Ate Nine";
//     }

//     return answer;
// }

const chainToSwitch = val => {
    let answer = "";

    switch(val) {

    
        case "bob":
            answer = "Marley";
            break;
        
        case  42:
            answer = "The Answer";
            break;
        case 1:
            answer = "There is no #1";
            break;
        case 99:
            answer = "Missed me by this much!";
            break;
        case 7:
            answer = "Ate Nine";
        break;
    }

    return answer;
}