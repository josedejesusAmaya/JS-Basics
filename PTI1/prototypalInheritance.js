// let animal = {
//     eats: true
// };

// let rabit = {
//     jump: 10
// };

// rabit.__proto__ = animal;

// console.log(rabit.eats);

/******************************************** */

let animal = {
    eats: true,

    walks() {
        console.log('animal walks');
    }
};

let rabit = {
    jump: 10,
    __proto__: animal 
};

console.log(rabit.walks());

/**
 * __proto__ is a historical getter/setter for [[Prototype]]
It’s a common mistake of novice developers not to know the difference between these two.

Please note that __proto__ is not the same as the internal [[Prototype]] property. It’s a getter/setter for [[Prototype]]. Later we’ll see situations where it matters, for now let’s just keep it in mind, as we build our understanding of JavaScript language.

The __proto__ property is a bit outdated. It exists for historical reasons, modern JavaScript suggests that we should use Object.getPrototypeOf/Object.setPrototypeOf functions instead that get/set the prototype. We’ll also cover these functions later.

By the specification, __proto__ must only be supported by browsers. In fact though, all environments including server-side support __proto__, so we’re quite safe using it.

As the __proto__ notation is a bit more intuitively obvious, we use it in the examples.
 */