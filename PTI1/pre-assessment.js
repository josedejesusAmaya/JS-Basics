const result = "2021" - "1978";
console.log('result', result);
console.log('typeof', typeof result);

const func = function(a, b) {
    return arguments.length;
}

const result2 = func(4, 3, 2, 1); // funct is not defined
console.log('result2', result2);

let myArrayA = [];
let myArrayB = new Array();
console.log('a', myArrayA);
console.log('b', myArrayB);

function handleTry () {
    try {
        console.log("Hi");
        try {
            throw "Eoo";
        }
        catch(e){
            console.log(e,"Inner Exception");
            throw "Exception was thrown";
        }
        finally{
            console.log("finally");
            return; // Will execute de return, bc this is a function, it will end the process
        }
    }
    catch(e){
        console.log(e,"Outer Exception"); 
    }
}
handleTry();

// Object literals are just for one instance.
let personObj = {
    name: 'Pepe',
    age: 26,

    get getName() {
        return this.name;
    }
}
console.log('person\'s name', personObj.getName);

// factory function not need of new and its for many
const personFactory = (name, age) => {
    const sayHello = () => console.log('hello!');
    return { name, age, sayHello }; // Object Shorthand
};

const jeff = personFactory('jeff', 27);
console.log(jeff.name); // 'jeff'
jeff.sayHello(); // calls the function and logs 'hello!'

// For reference, here is the same thing created using the constructor pattern
const Person = function(name, age) {
    this.sayHello = () => console.log('hello!');
    this.name = name;
    this.age = age;
};

/** The same function converted to an ES2015 class
 * class Person {
    constructor(name, age) {
        this.sayHello = () => console.log('hello!');
        this.name = name;
        this.age = age;
    }
}
 */
  
const jeff = new Person('jeff', 27);