const l = console.log;
    
const obj = {  
    method: function() {  
        l("method in obj")  
    }  
}  
const obj2 = {}

obj2.__proto__ = obj;

obj2.method();

/************************************* */

let animal = { 
    eats: true, 
    walk() { 
        console.log("Animal walk"); 
    } 
};

let rabbit = { 
    jumps: true, 
    __proto__: animal 
}; 

let longEar = { 
    earLength: 10, 
    __proto__: rabbit 
}; // walk is taken from the prototype chain 

longEar.walk(); // Animal walk 
console.log(longEar.jumps); // true (from rabbit)