function chivas(){
    let campeonatos=12;
    let numeroUpdates=0;
    function addCampeonato(x=1){
        campeonatos=campeonatos+x; 
        numeroUpdates++;
    }
    function getCampeonatos(){
        return campeonatos;
    }
    function getUpdates(){
        return numeroUpdates;
    }

    return {addCampeonato, getCampeonatos, getUpdates}
}

let ch=chivas();
console.log(ch);
ch.addCampeonato(1);
console.log(ch.getCampeonatos()); //13
console.log(ch.getUpdates()); //1
console.log(ch.campeonatos); //undefined