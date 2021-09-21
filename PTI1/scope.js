/*function food() {
    {
        var a = 1;
        let b = 2;
        const c = 3;
    }
    console.log("a", a);
    console.log("b", b);
}

food();
*/
function foo(){
    let teams=["cruz azul", "america", "pumas"];
    return function Addteam (newTeam){
        teams.push(newTeam);
        return teams;
    }
}

//b now is refearing to the function Addteam
let b=foo();
//Altough Addteam does not declare directly "teams" it has still access into it
console.log(b("chivas")); //[ 'cruz azul', 'america', 'pumas', 'chivas' ]
