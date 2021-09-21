/**
 * A callback is a function passed as an argument of another, which is then invoqued inside 
 * the other function to complete some kind of routine or action
 */

function greetings(name) {
    console.log('Hola ', name);
}

function userInterface(callback) {
    let name = 'Pepe';
    callback(name);
}

userInterface(greetings);


let add = function (num1,num2){
    let sum = num1+ num2; 
    return sum;
}(8,9);
console.log(add); // 17 