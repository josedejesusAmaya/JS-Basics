//A variable declared outside any block become Global and also without any keyword
var a = 1;
var a = 2; // var can be redeclared

function food() {
    let b = 2;
    const c = 3;
    if (true) {
        console.log(b);
    }
}
// console.log(b);
// console.log(c);

food();

let bar = "im a global variable";
let global = "global"
function foo() {
    let bar = "im a function variable";
    {
        let bar = "im a block variable";
        //This time JS engine try to find bar on the block, then on the function and at the end on the global scope. Since it was found on the block first, then does not try again on the other scopes.
        console.log(bar); //im a block variable
        //This variable instead, it will be not found on the block, then will look at the function and then will find it on the global scope 
        console.log(global); //global
    }
    //JS engine try to find bar first on the function and then on the global scope.
    console.log(bar); //im a function variable
}
//JS engine only find the variable on the global scope.
console.log(bar); //im a global variable
foo();
console.log(bar); //im a function variable with> bar but im a global variable with> let bar
