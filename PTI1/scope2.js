{
    var a=2; // var variables cannot have Block scope but let variables can.
    let b=2;
}

console.log('a1', a);
// console.log(b);

function foo(){
    {
        var a=5;
        let b = 6;
    }
    //a is still accessible here
    console.log('a2', a); //5
    // console.log('b', b); //6
}
//a is not accesible outside of the function

foo();
console.log('a3', a); //undefined


console.log(greeter);
var greeter = "say hello"; // with var = undefined with let or const = throw an Reference error 


f = 3;
console.log('f', f); // only works with var variables
var f;