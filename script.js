/* 
    #Classes are user defined datatypes
    #OBJECTS (Are instances of classes)
    - Objects are collections of properties.
    - Properies are a key-value pair
    - Rather than accessing data using an index, we use custom
      keys
*/

const user = {
    firstname: 'Shmartayo',
    lastname: 'Ayanda',
    email: 'kunlexzy4@gmail.com',
    is_Admin: true
}


// adding new properties to an object
user.username = 'Shmartayo1';

// You cam also add am array to a strimg 
user.friends = new Array(
    {
        name: 'Shmartayo',
         username: 'Me', 
        feature: 'Myself'
    },
    {
        name: 'Ayokunle',
         username: 'Kunlexzy', 
        feature: 'SuperStar'
    },
);

console.log(user);


const friends = [{firstName: 'Tammy', age: 30, username: 'TamTam'}, {firstName: 'panda', age:73, username: 'Pandaman'}];