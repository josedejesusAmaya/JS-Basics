1) What is the value of result? 
    const result = "2021" - "1978"
    ->  Return number: 43

 2) What func returns?
    const func = function(a, b) {
               return arguments.length;
                }
    const result = funct(4, 3, 2, 1);
    ->  Throw an error: funct is not defined

3) How can you check if an array is an array
    ->  We have three methods to know that and all of them return a boolean:
            1)  Array.isArray(variablename);
            2)  variable instanceof Array
            3)  variable.constructor ==== Array

4) How a Promise works
    ->  It represent the completion or failure of an async operation and have two blocks that contain a callback:
            1) then: inside this block you can define the code that you want to execute if the promise is successful.
            2) catch: block that runs if the promise have a failure, inside you can report the type of error for example.

5) How do you handle errors
    ->  JS have a list of defined Errors based upon the Error object and has a name and message but also we can extend
        the Error class and create custom errors.

6) What Promise.all does?
    ->  This method waits for all promises to resolve and returns an array of their results also if any of the given promises
        regects, it becomes the error of Promise.all and ignore the other results.

7) What is the purpose of async and await
    ->  To make handle easier the async operations with methods and functions.
        
        a. What happen with a method if a method is marked as async
            ->    The method is going to return a promise

8) Could you explain what the Promises solves in relations with callbacks? 
    ->  We can use nested Promises and each one recibes a callback as input with the result of the previus succefully operation but sometimes this cause a callback hell
        which is a bad habit that we should avoid so Promises could help us to solve it.

9) What is the use of try catch statements?
    ->  To prepare our program for runtime exceptions.

10) In a try catch block, what is the purpose of "finally" block.
    ->  It always executes after try and catch blocks, the purpose is to make sure that an action always execute no matter if
        throws an error or not.

        a. Mention at least one example on how can you take advantage of the finally statement
            ->  For example: In a program if try to open a file we can use finally to always makes
                sure to close the resource.

11) How can you insert an element at the beginning of an array
    ->  Whit the unshift method passing the element to insert as an argument and returns the new length of the element.

        a. How can you remove an element from the beginning of an array
            ->  Whit shift method and returns the element removed.

12) Is there any difference on declare an array in the below ways:
    ->  No, they return the same empty object of array.
        
        a. let myArray = [];
        b. let myArray = new Array();
        
13) What are  the difference between loop "for in" and loop "for of"
    ->  for in is useful to iterates over Object properties
        for of is useful to iterates over iterables objects like Arrays, Map, Set and arguments of objects.

14) What is the prototypical inheritance?
    ->  All JavaScript objects have a __proto__ property, that is a reference to another object, which is called the object's "prototype". 
        When a property is accessed on an object and if the property is not found on that object, the JavaScript engine looks at the object's __proto__, and the __proto__'s __proto__ and so on, until it finds the property defined on one of the __proto__s or until it reaches the end of the prototype chain returning null. This behavior simulates classical inheritance, but it is really more of delegation than inheritance.

15) What are the main differences between Object literals, Factory function and Constructor function?
    ->  The factory function pattern is similar to constructors, but instead of using new to create an object, factory functions simply set up and return the new object 
        when you call the function.
        Object literals are just for one instance.
        https://www.theodinproject.com/paths/full-stack-javascript/courses/javascript/lessons/factory-functions-and-the-module-pattern

        a. What happen if you forget to use the "new" keyword in a Constructor function
            Example:
            const recangle = new Rectangle();
            ->  It will return undefined also it won’t produce error messages that are easy to trace.

        b. What the operator "super" does?
            ->  Is used to call the constructor on the parent object that is being inherited by the child. It is used to avoid duplication of the parts of the constructor 
                that are present in both the parent and child class.

16) How can you mark a property or a method as private in a JavaScript "class"?
    -> Private properties should start with # symbol.

17) Value vs References
        a. Mention at least 4 types that JavaScript treats as "value types"
            ->  1) String
                2) Number
                3) Boolean
                4) undefined

        b. Mention at least 2 types that JavaScript treats as "reference types"
            ->  1) Arrays
                2) Objects
        
18) Can you explain what a Pure function is?
    ->  Pure Function is a function (a block of code) that always returns the same result if the same arguments are passed and only depends on its input arguments.
        This functions doesn not have side effects. 

19) Difference between “==” and “===” operators.
    ->  Equals to only compares the value and Strict equals to also compares the type of the values to compare.

20) Explain Hoisting in javascript.
    ->  Its when the variable and function declaration are put into memory during the compile phase, but stay exactly were you typed them in your code.
        https://www.youtube.com/watch?v=Fnlnw8uY6jo

21) Explain “this” keyword. 
    ->  A property of an execution context that in non-strict mode is always a reference to an object and in strict mode can be any value.

22) What is DOM?
    ->  It's Document Object Model and it's and API that represents and interacts with any HTML. Loaded in the browser and representing the doc as a node tree it allows to 
        access and interact with the document.

23) What are arrow functions? 
    ->  Its a shorthanded alternative to tradidional function expressions, but is limited and can't be used in all situations.
        * Does not have its own bindings to this or super, and should not be used as methods.
        * Does not have arguments or new.target
        * Not suitable for call, apply and bind methods, which generally rely on establishing a scope
        * Can not be used as constructors.
        * Can not use yield, within its body.

24) Is javascript a statically typed or a dynamically typed language? 
    ->  It's dynamically typed lenguage.

25) What is NaN property in JavaScript? 
    ->  It's Not a Number and means the value cannot be represented/expressed with numbers.

26) What is the rest parameter and spread operator?
    ->  rest parameter should be put at the last of the params and let us encapsulate the rest of the values as an array.
        spread operator allow to iterable objects (array or string) to be expanded.
