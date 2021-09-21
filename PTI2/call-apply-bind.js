// this value it still depends on where is the function called 
const obj = { a: 'custom' };
const a = 'Global';

function whatsThis() {
    return this.a;
}

console.log(whatsThis());
console.log(whatsThis.call(obj)); // call without params
console.log(whatsThis.apply(obj)); // apply without params


const obj2 = { a: 'Custom' };
function whatsThis2(f, b, c) {
    return this.a + f + b + c;
}

console.log(whatsThis2.call(obj2, 1,2,3)); // call with params
console.log(whatsThis2.apply(obj2, [1,2,3])); // apply with params

// hard binding
function sayHi() {
    return 'Hi, my name is ' + this.name;
}

var person =  {
    name: 'Juan',
};

var greeting = sayHi.bind(person);  //hard binding into person context

console.log(sayHi());
console.log(greeting()); // "Hi, my name is Juan"

function Person(greet) {
    this.name = 'Pedro';
    this.greeting1 = sayHi.call(this);
    this.greeting2 = greet.call(this);
}

const nPerson = new Person(greeting);
console.log(nPerson.greeting1); // binds it to this obj and logs Pedro
console.log(nPerson.greeting2);  // cannot re-bind, and logs Juan

obj4 = {name:"James"}
    obj5 = obj4;
    
    obj4.name = 'Pepe';
    
    // obj4.name = "Daniels"; //Trying to modify the property value. 
    // obj5.name = "Daniels";
    console.log(obj4); // {name: "James"}
    console.log(obj5); // {name: "James"}