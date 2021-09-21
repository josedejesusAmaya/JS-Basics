console.log("0 || 1 = " + (0 || 1));
console.log("1 || 2 = " + (1 || 2));
console.log("0 && 1 = " + (0 && 1));
console.log("1 && 2 = " + (1 && 2));

/************************************* */
console.log((function f(n) { return ((n > 1) ? n * f(n - 1) : n) })(10));

/************************************* */
var a = [1, 2, 3];
a[10] = 99;
console.log(a);

/************************************* */

// for (let i = 0; i < 5; i++) {
//     setTimeout(function () { console.log(i); }, i * 1000);
// }

/************************************* */

var x = 21;
var girl = function () {
    console.log(x);
    var x = 20;
};
girl();

/************************************* */

const verify = item => item > 4;
console.log(verify(5));
