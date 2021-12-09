function solution(number) {
    let res = [];
    for (let i = 0; i < number; i++) {
        if (i % 3 == 0 || i % 5 == 0 && !res.find((item) => item == i)) {
            res.push(i);
        }
    }
    return res.reduce((sum, current) => sum += current, 0);
}

const res = solution(-16);
console.log(res);

let foo = null;
'a' === 'ad' ? foo = 'is a' ? 'ac' === 'acd' : foo = 'isn\'t ac' : foo = 'isn\'t a';
console.log(foo);

console.log([...new Array(10).keys()]);
console.log([...new Array(10)]);
console.log(new Array(10));
console.log(new Array(10).keys());
