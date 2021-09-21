// var x = 7;
// function getName() {
//     console.log("Namaste Javascript");
// }

// getName();
// console.log(x);
// console.log(getName);

// console.log(this.x);
// console.log(window.x);

var a = 10;

{
    var a = 20;
    {
        var a = 30;
        console.log(a);
    }
}
