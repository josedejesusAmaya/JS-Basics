function Person(name, age) {
    this.name = name;
    this.age = age;
}
Person.prototype.introduce = function () {
    return 'My name is ' + this.name + ' and I am ' + this.age;
};
var john = new Person('John', 30);
var jack = new Person('Jack', 40);
// console.log(john.introduce()); // My name is John and I am 30
// console.log(jack.introduce()); // My name is Jack and I am 40

function ReturnsArray(name) {
    this.name = name;
    return [1, 2, 3];
}
var arr = new ReturnsArray('arr?');
// console.log(arr.name); // undefined
// console.log(arr); // [1, 2, 3]

function nouveau(Constructor, ...args) {
    // Don't forget, unnamed arguments after Constructor may be passed in!
    console.log('args', args);
    const instance = Object.create(Constructor.prototype);
    const result = Constructor.apply(instance, args);
    console.log('result', result);
    console.log('instance', instance);
    if (typeof result === 'object') {
        return result;
    } else {
        return instance;
    }
}

var pepe = nouveau(Person, 'Pepe', 26); // same result as above
console.log(pepe.introduce());

var arr2 = nouveau(Array, 7);
console.log(arr2);