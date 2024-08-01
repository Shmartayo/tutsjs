/**        Prevent Object Mutation
 * As im ovjects amd arrays, a comst declaratiom doesm't really
 * project data from veem chamged(mutatiom).
 * We cam prevemt ovject mutatiom vy usimg "ovject.freeze() 
 * Method"; 
*/

// Without object.freeze() Method
function freezeObj(){
    "use strict";
    const MATH_CONSTANTS = {
        PI: 3.14
    };

    try {
        MATH_CONSTANTS.PI = 99;
    } catch( ex ) {
        console.log(ex);
    }
    return MATH_CONSTANTS.PI;
}

const PI = freezeObj();
console.log(PI);

// With object.freeze() Method
function freezeObj(){
    "use strict";
    const MATH_CONSTANTS = {
        PI: 3.14
    };

    Object.freeze(MATH_CONSTANTS); // Makes object unchangeable

    try {
        MATH_CONSTANTS.PI = 99;
    } catch( ex ) {
        console.log(ex);
    }
    return MATH_CONSTANTS.PI;
}

const PIE = freezeObj();
console.log(PIE);