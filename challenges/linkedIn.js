// var a = 1;
// function f1() {
//     console.log(a); // 1
// }
// function f2() {
//     var a = 2;
//     f1();
// }
// f2();

// 'use strict';
function foo() {
    this.name = "Pepe";
    console.log(this); // strict: Cannot set property 'name' of undefined. non-strict: print globalThis/Window
}

foo();

console.log('0/2> ', 0/2); // 0
console.log('2/0> ', 2/0); // Infinity
console.log('-2/0> ', -2/0); // -Infinity
console.log('Infinity + 2> ', Infinity + 2); // Infinity
console.log('Infinity / 2> ', Infinity / 2); // Infinity
console.log('Infinity / 0> ', Infinity / 0); // Infinity
console.log('0/0> ', 0/0); // NaN
console.log('undefined + 2> ', undefined + 2); // NaN
console.log('null + 2> ', null + 2); // 2

function counter() {
    for(var count = 1; count <= 10; count++) {
        setTimeout(function () {
        console.log(count);
        }, 1000 * count);
    }
}

function counter2() {
    for(var count = 1; count <= 10; count++) {
        (function (i) {
            setTimeout(function () {
            console.log(i);
            }, 1000 * i);
        })(count);
    }
}

counter2();