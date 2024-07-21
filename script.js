//Coding Challenge Profile Look Up

/* 
    we pass in a name and a property and it's going to return
    the value of that property,and if the contact does
    not exist it should return "No such contact" and if the
    contact exists and the property doesn't then it
    should return "No such property"
*/

let contacts = [
    {
        "firstName" : "Akira",
        "LastName": "Laine",
        "number":"0543236543",
        "likes":["Pizza","Coding", "Brownie Points"]
    },
    {
        "firstName" : "Harry",
        "LastName": "Porter",
        "number":"0994372684",
        "likes":["Hogwarts","Magic", "Hagrid"]
    },
    {
        "firstName" : "Sherlock",
        "LastName": "Holmes",
        "number":"0487345643",
        "likes":["Intriguing Cases", "Violin"]
    },
    {
        "firstName" : "Kristian",
        "LastName": "Vos",
        "number":"unknown",
        "likes":["JavaScript","gaming", "Foxes"]
    }
    
]

// function lookUpProfile(name, prop){
//     for(let i = 0; i < contacts.length; i++){
//         if(!contacts[i]["firstName"] == name){
//             return "No such contact";
//         } else {
//             if(!contacts[i][prop]){
//                 return "No such property";
//             } else{
//                 return contacts[i][prop];
//             }
//         }
//     }
// }

function lookUpProfile(name,prop){
    for(let i = 0; i <contacts.length; i++){
        // Check if the name is a name in the contact list
        if(contacts[i]["firstName"] === name){
            return contacts[i][prop]|| "No such operator";
        }
    }
    return "No such contact";
}

let data = lookUpProfile("Akira", "likes");
console.log(data);