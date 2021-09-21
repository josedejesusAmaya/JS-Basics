function curry(func) {
    return function curried(...args) {
        console.log(args.length, func.length);
        if (args.length >= func.length) {
            return func.apply(this, args);
        } else {
            return function(...args2) {
                console.log(args.concat(args2));
                return curried.apply(this, args.concat(args2));
            }
        }
    }
}

function date(year, month, day) {
    return `${year} ${month} ${day}`;
}

let curriedDate = curry(date);

console.log(curriedDate(2000,12,1));    //2000 12 1
console.log(curriedDate(2000)(12)(1));  //2000 12 1
console.log(curriedDate(2000,12)(1));   //2000 12 1

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/apply