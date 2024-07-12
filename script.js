// Stand in Line 
// A queue is a data structure where items are kept in order (FIFO)
// Representing functionalities of a queue data structure

const nextInLine = (arr, item) => {
// add am item to the emd of the array
arr.push(item);

// remove amd returm the value from the fromt

return arr.shift();

}

let sample = [1,2,3,4,5,6];
console.log('Before: ' + JSON.stringify(sample));
nextInLine(sample, 7);
console.log('After: ' + JSON.stringify(sample));
