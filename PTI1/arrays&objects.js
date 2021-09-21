console.log(Array.of(5));
console.log(new Array(5));


const obj1 = new Object(123) //creates a Number object
console.log(obj1);
console.log(typeof (obj1));

arr = [123, 89, 9, 0, 11111];
console.log([...arr].sort((a, b) => a - b));

const fruits = {
    apple: 45,
    banana: 14,
    grapes: 34
}

//This print the same
for (let fruit in fruits)
    console.log(fruit + ", " + fruits[fruit])

for (let [fruit, quantity] of Object.entries(fruits))
    console.log(fruit + ", " + quantity)

//This only can print the values of the keys
for (let value of Object.values(fruits))
    console.log(value);

//This only can print the keys
for (let key of Object.keys(fruits))
    console.log(key);

/**
 * Destructuring properties of objects
 */
const user = {
    id: 42,
    is_verified: true
};
const { id, is_verified } = user;
console.log('id', id);

/**
 * Assigning to new variable names
 */
const o = { p: 42, q: true };
const { p: foo, q: bar } = o;

// console.log('p', p); throws an error: p is not defined
console.log('foo', foo);

/**
 * unpacking fields from objects passed as a function param
 */

const user2 = {
    id: 42,
    displayName: 'jdoe',

    fullName: {
        firstName: 'John',
        lastName: 'Doe'
    }
};

function userId({ id }) {
    return id;
}

function whois({ displayName, fullName: { firstName: name } }) {
    return `${displayName} is ${name}`;
}

console.log(userId(user2)); // output: 42
console.log(whois(user2));  // output: jdoe is John

let set = new Set();
// let john = { name: "John" };
let john = "John";
let pete = { name: "Pete" };
let mary = { name: "Mary" };

// visits, some users come multiple times
set.add(john);
set.add(pete);
set.add(mary);
set.add(john);
set.add(mary);

// set keeps only unique values 
console.log(set.size); // output: 3

for (let user of set) {
    console.log(user); // output: John (then Pete and Mary) 
}

console.log(set.entries());