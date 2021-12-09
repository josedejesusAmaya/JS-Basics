function toCamelCase(str){
    return str.split(/[-_]/g)
      .map((word, index) => index != 0 ? word = word.charAt(0).toUpperCase() + word.slice(1) : word)
      .join('');
}

/**
 *
    1. _ (Underscore) as a parameter name means that that parameter will not be used in the function (i.e. it is unnecessary to get the desired return, so doesn't deserve a name.)---
    2. He creates a separate regexp capture group by having the dot in the parantheses.---
    3. So the whole match is underscore|hyphen + a letter but he also has just the letter as a separate capture group 1.
    4. first parameter is the whole match including the underscore|hyphen + the letter (e.g. "-s") and is not used.---
    5. the second parameter is capture group 1, which is only the letter part of the whole match.---
    6. he converts only parameter 2 (i.e. capture group 1) to uppercase and returns that to be used as replacement.
 */

function toCamelCaseTwo(str){
    return str.replace(/[-_](.)/g, (_, c) => c.toUpperCase());
}

let res = toCamelCaseTwo("the_stealth_warrior");
console.log(res);

// var x = 1;

var fun = function() {
    console.log(x);
    var x = 4;
}

fun();
