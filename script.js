//Arrays- Accessing values in multi-dimensional arrays
// Shopping list - pushing my shopping list to an organized detailed array

let listArr = [['cereal', 3], ['milk', 2], ['bananas', 3], ['juice', 2], ['eggs', 12]];

const arr = (myList) => {
    let sent = new Array();

    for(item of myList){
        let val = `${item[0]} has ${item[1]} Quantity`;
        sent.push(val);
    }

    return sent;
}

console.log(arr(listArr));