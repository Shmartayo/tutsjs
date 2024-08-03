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

