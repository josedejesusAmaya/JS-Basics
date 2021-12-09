const charizard = {
  name: "charizard",
  sprites: {
    front_default:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png",
    front_shiny:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/6.png",
  },
  videoLink: "https://www.youtube.com/watch?v=evvO5Gcl-mo",
};

const ditto = {
  name: "ditto",
  sprites: {
    front_default:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png",
    front_shiny:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/132.png",
  },
  videoLink: "https://www.youtube.com/watch?v=aSzsVcPjj70",
};

const claydol = {
  name: "claydol",
  sprites: {
    back_default:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/344.png",
    back_shiny:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/344.png",
  },
  videoLink: "https://www.youtube.com/watch?v=MoOULYKrjrs",
};

const solrock = {
  name: "solrock",
  sprites: {
    back_default:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/338.png",
    back_shiny:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/338.png",
  },
  videoLink: "https://www.youtube.com/watch?v=aGGpEG8La3s",
};

const zangoose = {
  name: "zangoose",
  sprites: {
    back_default:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/335.png",
    back_shiny:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/335.png",
  },
  videoLink: "https://www.youtube.com/watch?v=k7T9STO48ZQ",
};

const mockPokemonsData = [charizard, ditto, claydol, solrock, zangoose];

function getImages({ sprites }) {
    console.log(sprites);
    let images = [];
    for (const i in sprites) {
        images.push(sprites[i]);
    }

    console.log(images[0]);
}

getImages(mockPokemonsData[0]);