/**
 * What is a potential pitfall with using typeof bar === "object" to determine if bar is an object? How can this pitfall be avoided?
 * That typeof null is also an object
 * console.log((bar !== null) && (bar.constructor === Object));
 */

(function () {
    var a = b = 3;
})();

console.log("a defined? " + (typeof a !== 'undefined'));
console.log("b defined? " + (typeof b !== 'undefined'));

/********************************************************* */

var myObject = {
    foo: "bar",
    func: function() {
        var self = this;
        console.log("outer func:  this.foo = " + this.foo);
        console.log("outer func:  self.foo = " + self.foo);
        (function() {
            console.log("inner func:  this.foo = " + this.foo);
            console.log("inner func:  self.foo = " + self.foo);
        }());
    }
};
myObject.func();

/**
 * Write a sum method which will work properly when invoked using either syntax below
 * console.log(sum(2,3));   // Outputs 5
 * console.log(sum(2)(3));  // Outputs 5
 */

function sum(arg1) {
    if (arguments.length === 2 ) {
        return arguments[0] + arguments[1];
    }
    else {
        return function (arg2) {
            return arg1 + arg2;
        }
    }
}

console.log(sum(2, 3));
console.log(sum(2)(3));

var arr1 = "john".split('');
console.log('arr1', arr1);

var arr2 = arr1.reverse(); // reverse() method doesn’t only return the array in reverse order, it also reverses the order of the array itself
console.log('arr2', arr2);

var arr3 = "jones".split('');
console.log('arr3', arr3);

arr2.push(arr3);
console.log("array 1: length=" + arr1.length + " last=" + arr1.slice(-1)); //   
console.log("array 2: length=" + arr2.length + " last=" + arr2.slice(-1)); // 