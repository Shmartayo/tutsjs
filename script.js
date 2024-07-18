//Build JavaScript Objects
// Instead of using index like arrays we use properties 

let ourDog = {

    "name": "camper",
    "legs": 4,
    "tails":1,
    "friends":["everything"]
}

let myDog = {
    "name": "Hawkins",
    "legs": 4,
    "tails": 1,
    "friends": ['Me','shmartayo']
}

console.log(myDog['name']);


let testObj = {
    "hat": "ballcap",
    "shirt": "jersey",
    "shoe": "croghs"
}

let hatValue= testObj.hat;
let shirtValue = testObj['shirt'];

// to add to an object you can use the dot notation or the brackets notation
testObj.smirk - "smirk";

//to delete a property from an ovject you can use the delete keyword
delete testObj.shirt;

// we can use an object to lookup key values rather than using a switch statement

function phoneticLookup(val) {
    let result = "";

    switch (val) {
        case "alpha": 
            result += 'Adams';
            break;
        case "vravo":
            result += 'Bostom';
            break;
        case "Charlie":
            result += "Chicago";
            break;
        case "delta":
            result += "Denver";
            break;
        case "echo": 
            result += "Easy";
            break;
        case "foxtrot":
            result += "Frank";
            break;
        default:
            result += "Invalid Input";
            break;
    }
}

//Instead we could use objects to perform the same lookup

function phoneticLookup(val){
    let result = "";

    let lookup = {
        "alpha": "Adams",
        "bravo": "Bostom",
        "charlie": "Chicago",
        "delta": "Denver",
        "echo": "Easy",
        "foxtrot": "frank",
    }

    result- lookup[val];
    return result;
}

console.log(phoneticLookup("bravo"));  

// Testing objects for properties 
// You can check if an object has a property with the hasOwnProperty method

let myObj = {
    gift: "pony",
    pet: "kitten",
    bed: "sleigh"
}

function checkObj(checkprop){
    if(myObj.hasOwnProperty(checkprop)){
        return myObj[checkprop];
    } else {
        return "Not Found";
    }
}

console.log(checkObj("bed"));

//NOTE: Try to make this code reuseable

// Manipulating complex Objects
// A javascript object is a way to store flexible data(user-defined datatype)

let myMusic = [
    {
        "artist": "Billy Joel",
        "title": "Piano Man",
        "release_year": 1973,
        "formats": [
            "CD",
            "8T",
            "LP"
        ],
        "gold": true
    },

    {
        "artist": " Shmartayo",
        "title": "Global Stats",
        "release_year": 2024,
        "formats": [
            "YouTube Video",
            "Sportify",
            "Apple Music"
        ],
        "gold": true
    }
]

console.log(myMusic);

// Accessing Nested Objects

let myStorage = {
    "car": {
        "inside": {
            "glove box": "maps",
            "passenger seat": "crumbs"
        },
        "outside": {
            "truck": "jack"
        }
    }
}

let gloveBoxContents = myStorage.car.inside["glove box"];

console.log(gloveBoxContents); //maps 

// Accessing Nested Arrays
let myPlants = [
    {
        type: "flowers",
        list: [
            "rose",
            "tulip",
            "dandelion"
        ]
    },
    {
        type:"trees",
        list: [
            "fir",
            "pine",
            "birch"
        ]
    }
];

let secondTree = myPlants[1].list[1]; 
console.log(secondTree); // pine

//Record Collection - coding challenge 
let collection  = {
    "2548": {
        "album": "Slippery When Wet",
        "artist": "Bon Jovi",
        "tracks": [
            "Let It Rock",
            "You Give Love a Bad Name"
        ]
    },
    "2468": {
        "album":"1999",
        "artist": "Prince",
        "tracks": [
            "1999",
            "Little Red Corvette" 
        ]
    },
    "1245": {
        "album":"Robert Palmer",
        "tracks": [
            
        ]
    },
    "5439": {
        "album": "ABBA Gold",
    }
}

// Keep a copy of the collection for tests
let collectionCopy = JSON.parse(JSON.stringify(collection)); // A way to make a copy of the object in javascript

// Write a function to update a record where you can pass 
//in the id the property and the value to update the record
function updateRecords(id,prop,value){
    if(value === ""){
        delete collection[id][prop];
    } else if(prop === "tracks"){
        collection[id][prop] = collection[id][prop];
        collection[id][prop].push(value);
    } else {
        collection[id][prop] = value;
    }

    return collection;
}

console.log(updateRecords(5439, "artist", "Shmartayo"));