let numObj = new Number(); // Number
console.log('typeof numObj =', typeof numObj); // object
console.log('numObj', numObj); // [Number: 0]

let numVal = Number(); // number
console.log('typeof numVal =', typeof numVal); // number
console.log('numVal', numVal); // 0

let numFunc = Number; // NumberConstructor
console.log('typeof numFunc =', typeof numFunc); // function
console.log('numFunc', numFunc); // [Function: Number]

/**
 * 1. A new empty object is created and assigned to this.
 * 2. The function body executes.
 * 3. The value of this is returned. 
 */

function User(name) { 
    // this = {}; (implicitly) (1
    // add properties to this (2
    this.name = name; 
    this.isAdmin = false; 
    // return this; (implicitly) (3 
}

// And the constructor returns the this object.
function Car() {
    this.num_wheels = 4;
}

let car = new Car(); // output: Car { num_wheels: 4 };