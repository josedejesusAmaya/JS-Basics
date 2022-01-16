// This is a class
// const Sum3 = (function () {
//     return function Sum3() {
//         acc = 0;
//         return function (n) {
//             this.acc += n;
//             console.log(this.acc);
//         }
//     }
// }());

// const Sum3 = function () {
//     this.acumulator = 0;
//     return (n) => {
//         this.acumulator += n;
//         console.log(this.acumulator);
//     }
// }

class Sum3 {
    constructor() {
        this.acc = 0;
        return this.sumMethod.call(this.acc);
    }

    sumMethod(n) {
        // this.acc = 1;
        console.log(n);
    }
}
  
  
let sum5 = new Sum3();
console.log(sum5);
sum5(3); // 3
sum5(5); // 8
sum5(2); // 10 
let sum6 = new Sum3();
sum6(1); // 1
sum5(1); // 11
