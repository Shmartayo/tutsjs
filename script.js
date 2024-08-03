/**Write concise Object Literal Declarations Using SImple Fields
 *  This is an easy way to define object literals
*/

// const createPerson = (name, age, gender) => {

//   // Old method
//   return {
//     name: name,
//     age: age,
//     gender: gender
//   };


// };

const createPerson = (name,age,gender) => ({name, age, gender});

console.log(createPerson("shmartayo",24, "Male"));