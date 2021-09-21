function Animal(data) {
    var obj = {};
    obj.name= data.name;
    return obj;
}


function Cat(data) {
    var that = Animal(data);

    that.sayHello = () => {
        return 'Hello my name is ' + that.name;
    }

    return that;
}

var cat = Cat({name: 'cat'});
console.log(cat.sayHello());