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

// add all the elements of an array

let arr =[1,2,3,4,5];
let total = 0;

for(let i = 0; i < arr.length; i++){
    total +=arr[i];
}

console.log(total); // 15

// Multiply all the elements in an array
let arra = new Array(1,2,3,4,5);
let mul = 1;

for(let i = 0; i < arra.length; i++){
    mul *= arra[i];
}

console.log(mul); // 120

// Nesting For loops
// if you have a multi-dimensional or nested array you can use 
//  nested for loop to access all the array elements.
// 2:22:36 

function multiplyAll(arr){
    let product = 1;

    for(let i = 0; i < arr.length; i++){
        for(let j = 0; j < arr[i].length; j++){
            product *= (arr[i][j]);
        }
    }

    return product;

}

let product= multiplyAll([[1,2],[3,4],[5,6,7]]);
console.log(product); // 5040

// Accessing contents inside a nested array
function accessNestedArray (arr){
    for(let i = 0; i < arr.length; i++){
        for(let j = 0; j < arr[i].length; j++){
            console.log(arr[i][j]);
        }
    }
}

accessNestedArray([[1,2],[3,4],[5,6,7]]);

// Iterate with Do... While Loops
let i = 0;

do {
    console.log("Ayo");
    i++;
} while (i < 5);