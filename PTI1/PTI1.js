// https://jakearchibald.com/2015/tasks-microtasks-queues-and-schedules/
// console.log(1);
// setTimeout(function () { console.log(2) }, 0);
// setTimeout(function () {
//   console.log('setTimeout');
// }, 0);
// Promise.resolve().then(console.log(3));

/*************************************************** */
/*
console.log('script start');
setTimeout(function () {
  console.log('setTimeout');
}, 0);

Promise.resolve()
  .then(function () {
    console.log('promise1');
  })
  .then(function () {
    console.log('promise2');
  });
console.log('script end');
*/

/************************************** */
let n = new Number(2);
let n2 = 2;
/************************************** */

/*
let sum1 = new Sum();
sum1(3); // 3
sum1(5); // 8
sum1(2); // 10 
let sum2 = new Sum();
sum2(1); // 1
sum1(1); // 11
*/

// let arr1 = new Array(2); // two empty slots [ , ]
// let arr2 = [2]; // [2]


/************************************** */

// let myVar = 'Hello';
// myVar[1] = 'o'; //myVar[1] is a substring so this line is a simple assignation and returns 'o' 
// console.log(myVar); // no modification are made so the output will be "Hello"

// null + 10; // 10
// undefined + 10; // NaN
// typeof function () {} // function


function foo() {
  // with let prints 0,1 after x sec. With var prints (2) 3 after x sec.
  for (let i = 0; i < 2; i++) { 
        setTimeout(() => {
          console.log(i);
        }, 3000);
    }

  /**
   * Declare the variable i in the for loop with let instead of var. The let keyword from ES6 creates a separate scope for the code block 
   * that allows for loop to print the consecutive variables.
   * https://medium.com/@axionoso/watch-out-when-using-settimeout-in-for-loop-js-75a047e27a5f
   * https://www.freecodecamp.org/news/var-let-and-const-whats-the-difference/
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures#creating_closures_in_loops_a_common_mistake
   */

  // for (let i = 1; i < 10; i++) {
  //   setTimeout(function timer() {
  //     console.log("hello world");
  //   }, i * 3000);
  // }

  // for (let counter = 1; counter < 5; counter++) {
  //     {
  //         console.log('Inside the loop:' + counter);
  //     }
  // }
  // console.log('Outside the loop:' + counter);
}

foo();