/**
    An even number is a number that can be divided into two equal groups.
    An odd number is a number that cannot be divided into two equal groups.
 */
const arr = [5, 1, 3 , 4, 2, 6];

const odd = arr.filter(number => number % 2);
const even = arr.filter(number => number % 2 === 0);
console.log('odd ', odd);
console.log('even ', even);