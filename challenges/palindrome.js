function isPalindromeJS(str) {
    // reemplazo todo lo que no sea letras (mayúsculas 
    // y minúsculas) con una expresión regular
    str = str.replace(/[^A-Za-z]/g, "");
    // convierto a un array de chars, invierto el orden y 
    // lo regreso a cadena
    const reverseStr = str.split('').reverse().join('');
    // retorno un booleano con el resultado de la 
    // comparación
    return str === reverseStr;
}

let res = isPalindromeJS('anita lava la tina');
console.log(`${res ? 'Is a palindrome' : 'Is not a palindrome'}`);
