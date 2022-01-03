/**
 * Write	a	sum	function	which	will	work	properly	when	invoked	using	syntax	below
 * 
 *  sum(2,3);		//	Outputs	5
    sum(2)(3);	//	Outputs	5
    sum(1)(2)(3)(4);	//	Outputs	10
 */


function curry(f) {
    return function (a) {
        return function (b) {
            return function (c) {
                return function (d) {
                    return f(a, b, c, d);
                }
            }
            
        };
    };

    function round(x) {

    }
}

function sumFun(...args) {
    let params = [...args];
    let accumulator = 0;
    for (const value of params) {
        accumulator += value;
    }
    return accumulator;
}

// function sum() {
//     console.log(arguments);
// }

let sum = curry(sumFun);

// console.info(sum(1)(2));
// console.info(sum(1,2));
// console.info(sum(1, 2));

// console.info(sum(2, 3));
console.info(sum(1)(2)(3)(4));