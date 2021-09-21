let age = 34;

const obj = {
    age,
    myfunction: function(params) {
        
    },

    myOtherFunction() {

    }

};

console.log(obj);

let set = new Set();
let john = { name: "John" };
let pete = { name: "Pete" };
let mary = { name: "Mary" };

// visits, some users come multiple times
set.add(john); 
set.add(pete); 
set.add(mary); 
set.add(john); 
set.add(mary);

// set keeps only unique values 
console.log( set.size ); // output: 3

for (let user of set) { 
    console.log(user.name); // output: John (then Pete and Mary) 
}