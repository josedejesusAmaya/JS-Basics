/** Variables
 * cannot be a reserved keyboard
 * should be meaningful
 * cannot start with a number (1name)
 * cannot contain a space or hyphen (-)
 * Are case-sensitive
 */
let name = 'Pepe';
console.log('typeof name', typeof name);
console.log('name', name);

/** Objects
 *  {} it's call Object literal 
 */

let person = {
    firstName: "Pepe",
    age: 26
}

// Dot notation
person.age = 25;
// Bracket notation
let selection = 'firstName';
person[selection] = 'Jose'; // added new obj
console.log('person[selection]', person[selection]);
console.log('person', person);

/** Arrays
 * [] it's call Array literal
 * Arrays are dynamic
 */

let selectedColors = [];
selectedColors[0] = 'red';
selectedColors[1] = 2;
console.log(typeof selectedColors);
console.log(selectedColors);

/** for... in used in objects
 * 
 */
console.log('/****************************');
for(let i in person) {
    console.log('i', i);
    console.log('person[i]', person[i]);
}

/** for... of only iterable objects
 *
 */
console.log('/****************************');
for(let j of selectedColors) {
    console.log('j', j);
}

/** foreach only used with arrays
 * 
 */
const fruits = ["Apple", "Banana"];
fruits.forEach((item,index) => {
    console.log(item, index);
});

/** 
 * executed only once
 */
setTimeout(function(){ alert("Hello"); }, 3000);