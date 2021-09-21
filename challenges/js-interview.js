/**
 * function to validate palindromes
 * input: string
 * output: string
 * valid: "level"
 * unvalid: "", " level"
 */

function isPalindrome(input) {
    if (input.length === 0) return false;
    let trimInput = input.trim();
    let reverseInput = trimInput.split("").reverse().join("");
    return input === reverseInput;
}


let res = isPalindrome("level");
console.log(`${res ? 'Is palindrome' : 'Isn\'t palindrome'}`);

/**
 * func to count number of characters in a given string
 * input: "sings", "s"
 * output: 2
 */

function countChar(character, input) {
    let resArray = [...input].filter((item) => item === character);
    return resArray.length;
}

let res2 = countChar("s", "sings");
console.log(res2);


/**
 * func to count number of characters in a given string v2
 * input: "sings", "s"
 * output: 2
 */

function countChar2(character, input) {
    let obj = {};
    for(let i = 0; i < input.length; i++) {
        obj[input[i]] = ++obj[input[i]] || 1;
    }
    console.log(obj);

    return obj[character];
}

let res3 = countChar2("s", "sings");
console.log(res3);

/**
 * Find the number duplicated into an array of numbers
 * input: array
 * output: number
 */

function finDuplicatedNumber(arrayOfNumber) {
    let auxArray = [];
    let duplicated = [];
    for(let i = 0; i< arrayOfNumber.length; i++) {
        if (auxArray.find(element => element === arrayOfNumber[i])) {
            duplicated.push(arrayOfNumber[i]);
        }
        else {
            auxArray.push(arrayOfNumber[i]);
        }
    }
    
    return duplicated;
}

let res4 = finDuplicatedNumber([1,2,3,3,4,5,4]);
console.log(`The duplicated number are ${res4}`);