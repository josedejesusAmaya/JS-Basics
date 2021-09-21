function commonCharacter(input) {
    let maxChar = '';
    let arrEachChar = {};
    let maxCount = 0;
    for(let i = 0; i < input.length; i++) {
        arrEachChar[input[i]] = ++arrEachChar[input[i]] || 1;
    }

    console.log(arrEachChar);
    for (let item in arrEachChar) {
        if (arrEachChar[item] >= maxCount) {
            maxCount = arrEachChar[item];
            maxChar = item;
        }
    }
    return maxChar;
}

let res = commonCharacter("TTTThiss is aaaa test");
console.log('value>', res);