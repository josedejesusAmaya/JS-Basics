const obj4 = {name: 'James'};

obj5 = obj4;

Object.freeze(obj4);

obj4.name = "Daniel";
obj5.name = "Daniel";
console.log(obj4);
console.log(obj5);