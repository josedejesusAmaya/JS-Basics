/* add function */
let add = function add(...args) {
  let sum = args.reduce((acc, val) => acc + val, this);
  console.log('this', this);
  if (typeof sum === 'object') sum =this.valueOf();
  const chain = add.bind(sum); // return a function
  chain.valueOf = () => sum; // Set the primitive value
  return chain;
}.bind(0); // initial parameter

/* tests */
console.log('add() = ' + add());
 console.log('add()(1, 2)() = ' + add()(1, 2)());
 console.log('add(1)(2) = ' + add(1)(2));
// /* even cooler stuff */
console.log('add(1, 2)(3) = ' + add(1, 2)(3));
// console.log('add(1, 2, 3)(4, 5)(6) = ' + add(1, 2, 3)(4, 5)(6));
// /* retains expected state */
 let add7 = add(7);
 console.log('let add7 = add(7)');
console.log('add7(3) = ' + add7(3));
// console.log('add7(8) = ' + add7(8));


/**
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/valueOf
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/bind
 * 
 */