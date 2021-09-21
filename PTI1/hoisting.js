var food = 'hamburger';

var favoriteFood = function () {
    console.log(`Original food: ${food}`);
 
    var food = 'sushi';
 
    console.log(`New favorite food: ${food}`)
}
 
favoriteFood();
 
// The result is:
// Original food: undefined  
// New favorite food: sushi
 
// What Javascript mechanism executes is
/*var food = undefined;
let favoriteFood = undefined;
 
food = 'hamburger';
 
favoriteFood = function () {
    var food = undefined;
    console.log(`Original food: ${food}`);
 
    food = 'sushi';
    console.log(`New favorite food: ${food}`)
}
 
favoriteFood();*/


/******************************* */
function foo() {
    myVar = 2;
    var b = 3;
}

foo();

console.log('global a ', myVar);

// Hoisting functions
/**
 * 1. Function declarations
 * 2. Function expressions
 */

// Function declarations
hoisted(); // Output: "This function has been hoisted."

function hoisted() { // <- this is a statement form
  console.log('This function has been hoisted.');
};

// Function expressions
// Function expressions, however are not hoisted.

// expression(); //Output: "TypeError: expression is not a function

var expression = function() { // <- this is an expresion form
  console.log('Will this work?');
};

/******************************* */

// console.log(add); // Cannot access 'add' before initialization
let add = function (num1,num2){
  let sum = num1+ num2; 
  return sum;
}

console.log(add(1,3));  // 3