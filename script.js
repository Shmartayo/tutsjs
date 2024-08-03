/**Understand the differences between import and require
 * require was used in the past to import functions and codes from another 
 * files.
 * Now there is import and export.
 * You can export code in one file and import it into another
 *  file.
 * It also allows you to only import certain functions from
 *  a file
 * or certain variables
*/
import { capitalizeString } from "./string_function";
const cap = capitalizeString("hello!");

console.log(cap);

/** Use export to Reuse a code Block 
 * You export functions and variables from one file so that you 
 * can import them into another file thats how you can different code
 * 
*/

const capitalizeStrings = String => {
  return String.charAt(0).toUpperCase() + String.slice(1);
}

export { capitalizeStrings };
export const foo = "bar";
export const bar = "foo";

// Then we can import them into another file

/** Use * to import everything from a file 
 * If a file exports multiple different things you can import 
 * each thing individually  or you can import everything.
 * In other to do that use the * and create an object to store everything inside
*/

import * as capitalizeStrings from "./string_function";


/**Create an export fallback with export default
 * export default, this is a fallback export, it is often used
 *  when you only want to export one thing from a file
*/

export default function subtract(x,y) {return x - y;}

/** Import a Default Export 
 * the difference is that curly races are not required
*/
import subtract from "math_functions";

subtract(7,4);

