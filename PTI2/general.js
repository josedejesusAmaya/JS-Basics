const obj = {
    name: 'pepe',
    age: 25,

    sayHello: function () {
        console.log('hola');
    }
}

// for(let item in obj) {
//     console.log(obj[item]);
// }

const obj2 = new Object({name: 2});
console.log(obj2);

const newObj = Object.create(obj);
console.log(newObj.sayHello());

function Sum() {
    let acumulator = 0;
    return (n) => {
        acumulator += n;
        // console.log(acumulator);
    }
}

let sum1 = new Sum();
sum1(3); // 3
sum1(5); // 8
sum1(2); // 10 
let sum2 = new Sum();
sum2(1); // 1
sum1(1); // 11

// Arrays
let arr = [1, 3, 2, 6];
let arr2 = [4, 5, 6];
// arr.push(4); // return new length
// arr.pop(); // returns the removed element
// arr.shift(); // retuns  the removed element
// arr.unshift(0); // returns new length

// let arr3 = arr.concat(arr2);
// let arr3 = arr.join(''); // without value separate it by ','

// let arr4 =  ['a', 'b', 'c', 'd'];
// console.log(arr4.reverse());//returns ['d', 'c', 'b', 'a']
// console.log(arr4);//returns ['d', 'c', 'b', 'a']

console.log(arr.sort()); // returns a new array sorted and modify the original
arr.sort();

let arr5 = arr.slice(2, 5); //return a part of the array and the original remains intact
let arr6 = arr.splice(1,3);  // targets an array and returns the targeted array, but it causes a permanent change in the array.

// console.log(arr);
// console.log(arr6);

console.log('/****************************/');
let arr7 =  [123,89,9,0,11111];
let arr8 = arr7.sort((a, b) => a - b);
console.log(arr7);
console.log(arr8);