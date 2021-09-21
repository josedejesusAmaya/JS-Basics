function commonCharacter(input) {
    let res = null;
    let arrEachChar = [];
    [...input].forEach((item) => {
        if (!arrEachChar.find(element => element.value === item )) {
            let obj = {value: item, count: 0};
            arrEachChar.push(obj);
        }
    });
    arrEachChar.map((obj) => {
        let arrOfItem = [...input].filter(e => e === obj.value);
        obj.count = arrOfItem.length;
    });
    const reducer = (biggest, val) => {
        if (biggest.count > val.count) {
            return biggest;
        } else {
            return val;
        }
    };
    res = arrEachChar.reduce(reducer);
    return res.value;
}

let res = commonCharacter("Thisisatest");
console.log('value>', res);