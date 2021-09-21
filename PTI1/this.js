// function Car() {
//     this.num_wheels = 4;
//     return { num_wheel: 37 };
// }

// let car = new Car();
// console.log(car.num_wheel); // output: 37

function Car() {
    this.num_wheels = 4;
    return 'VROOM';
}

let car = new Car();
console.log(car.num_wheels); // output: 4
console.log(Car()); // No 'new', so the alert will show 'VROOM'
console.log(new Car()); // output: Car { num_wheels: 4 };