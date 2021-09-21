function palindrome(str) {
    str = str.replace(/[^A-Za-z0-9]/g, "");
    const reverseStr = str.split('').reverse().join('');
    return str === reverseStr;
}

let res = palindrome('  nurses run');
console.log(`${res ? 'Is a palindrome' : 'Is not a palindrome'}`);
