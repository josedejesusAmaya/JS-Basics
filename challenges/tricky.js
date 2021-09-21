function foo() {
    // with let prints 0,1 after x sec. With var prints (2) 3 after x sec.
    for (var i = 0; i < 2; i++) {
        setTimeout(() => {
            console.log(i);
        }, 5000);
    }
}

foo();

/**
 * Declare the variable i in the for loop with let instead of var. The let keyword from ES6 creates a separate scope for the code block
 * that allows for loop to print the consecutive variables.
 * https://medium.com/@axionoso/watch-out-when-using-settimeout-in-for-loop-js-75a047e27a5f
 * https://www.freecodecamp.org/news/var-let-and-const-whats-the-difference/
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures#creating_closures_in_loops_a_common_mistake
 */