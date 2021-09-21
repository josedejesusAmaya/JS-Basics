let user = {
    name: "John",
    money: 1000,

    // [Symbol.toPrimitive](hint) {
    //   console.log(`hint: ${hint}`);
    //   return hint == "string" ? `{name: "${this.name}"}` : this.money;
    // }
};

// conversions demo usign Symbol.toPrimitive:
console.log(user); // hint: string -> {name: "John", money: 1000, [Symbol(Symbol.toPrimitive)]: [Function: [Symbol.toPrimitive]]}
console.log(+user); // hint: number -> 1000
console.log(user + 500); // hint: default -> 1500

// using toString/valueOf
const socks = {
    mine: 3,
    yesi: 5
};

console.log(socks.toString()); // returns a string "[object Object]"
console.log(socks.valueOf()); // returns the object itself

const socksPrim = {
    name: "Peu",
    cost: 5,

    // for hint == "string"
    toString() {
        return `{name: "${this.name}"}`;
    },

    // for hint="number" or "default"
    valueOf() {
        return this.cost;
    }
};

console.log(socksPrim.toString()); // returns a string 
console.log(socksPrim.valueOf()); // returns 

// Flags of an object
var obj = {};
Object.defineProperty(obj, 'a', {
    value: 1,
    enumerable: true, //  is enumerable and show up in for ... in loops
    writable: true, // set if a property can be reassigned or not
    configurable: true, // if the property can be deleted and whether its attributes(other than value and writable) can be changed.
});

for (var i in obj) {
    console.log(typeof i);
} //'a'

console.log(Object.getOwnPropertyDescriptors(obj));

console.log('/**************************');

// object static methods
class Demo {
    static staticMethod() {
        console.log("I'm an static method");
    }
}

console.log(Demo.staticMethod());
const instance = new Demo();
// console.log(instance.staticMethod()); throws an error