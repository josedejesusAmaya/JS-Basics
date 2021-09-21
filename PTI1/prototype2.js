function Person(name) {
    this.name = name;
}

let person1 = new Person('Pepe');

console.log(person1.age);
// person1.age = 22; adding property to the object not to Person's constructor
Person.prototype.age = 23; // now all the instance created with this contructor are going to have age property
let person2 = new Person('Emi');
console.log(person2.age);
