const l = console.log
    
const obj = {  
    method: function() {  
        l("method in obj")  
    }  
}  
const obj2 = {};

obj2.__proto__ = obj  
obj2.method();

const obj3 = {};

obj3.prototype.sayHello = function () {
    return "hello, world";
};