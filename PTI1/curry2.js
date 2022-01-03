function curry(func) {
    return function curried(...args) {
        console.log('args', args);
        console.log('func', func);
        console.log('func length', func.length);
        if (args.length >= func.length) {
            return func.apply(this, args);
        } else {
            return function(...args2) {
                return curried.apply(this, args.concat(args2));
            }
        }
    };
}
function date (year, month, day){
    return `${year} ${month} ${day}`;
}
const curriedDate = curry(date);
console.log(curriedDate(2000,12,1));    //2000 12 1
console.log('/***********************');
console.log(curriedDate(2000)(12)(1));  //2000 12 1
console.log('/***********************');
console.log(curriedDate(2000,12)(1));   //2000 12 1


function sum(a) {
    return (b) => {
        return a + b;
    }
}

console.log(sum(2)(3));
