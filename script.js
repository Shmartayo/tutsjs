// A function that returns the smallest number in an array

const scores = new Array(96,99,97,92,90);

const minArray = (array) => {
    let x;
    let val = array[0];

    for(num of array){
        x = num;
        if (x <= val){
            val = x;
        }
    }
    return val;
}

minArray(scores);


