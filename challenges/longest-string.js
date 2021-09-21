function longestString(myArr) {
    let res = '';
    const reducer = (acc, val) => {
        if (acc.length > val.length) {
            return acc;
        } else {
            return val;
        }
    };

    res = myArr.reduce(reducer);

    return res;
}

const arr = ['one', 'two', 'three', 'four', 'six', 'on', 'seventen'];
let res = longestString(arr);
console.log(res);