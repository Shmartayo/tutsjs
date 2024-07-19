//Iterate with While Loops
//push the digits 0-4 into an array

let myArray = new Array();
let i = 0;
while(i<5){
    myArray.push(i);
    i++;
}

console.log("While loop: " + myArray);
//push the digits 0-4 into an array

let ourArray = new Array();
for(let i= 0; i<5; i++){
    ourArray.push(i);
}

console.log("For loop: " + ourArray);

// Iterate Odd Numbers with a For Loop
for(let i = 1; i < 10; i+=2){
    console.log(i);
}

for(let i = 1; i<10; i++){
    if(i%2 == 1){
        console.log(i);
    }
}

// Iterate Even Numbers with a For Loop
for(let i = 0; i<=10; i+=2){
    console.log(i);
}

//Count Backwards with a For Loop(even numbers)
for(let i = 10; i > 0; i-= 2){
    console.log(i);
}

let myarray = new Array();

//Count Backwards with a For Loop(odd numbers)
for(let i = 9; i > 0; i-= 2){
    myarray.push(i);
}
console.log(myarray);

let array = [1,2,3,4,5];

//Iterate through an array with a For Loop
for(let i = 0; i < array.length; i++){
    console.log(myarray[i]);
}

// Nesting For loops
// if you have a multi-dimensional or nested array you can use 
//  nested for loop to access the elements in the array.
// 2:22:36 