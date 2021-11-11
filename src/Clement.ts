/* type system

javascipt doesnt have a type system, but we can use the type system to make our code more robust

error prone

Typescipt is an officialy supported language at Google


*/

// JS BAD (error prone since input can be any type)

// function getLowerCaseString(input) {
//   return input.toLowerCase();
// }

// TS good
function getLowerCaseString(input: string): string {
  return input.toLowerCase();
}

// TypeScript infers the type of the input parameter
// TypeScript infers the type of the return value
