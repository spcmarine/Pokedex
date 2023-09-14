const PokemonModel = require("./PokemonModel")

class PokemonView {
  constructor(model, client) {
    this.model = model;
    this.client = client;

    const submitButtonEl = document.querySelector('#submit-button');
    const pokeInputEl = document.querySelector('#pokemon-name-input');

    submitButtonEl.addEventListener('click', () => {
      const pokeName = pokeInputEl.value;

      this.client.getPokeInfo(pokeName, pokeData => {
        console.log(pokeData);
        this.display(pokeData)
      });
    });
  }

  display(pokeData) {
      let pokeName = document.querySelector("#Pokemon-name"); 
      pokeName.textContent = pokeData.name;
      let pokeImage = document.querySelector("#Pokemon-image");
      pokeImage.src = pokeData.sprites.front_shiny;
      //   let pokeDescription = document.querySelector("#Pokemon-description");
      //   pokeDescription.textContent = pokdData.description;
      let pokeHeight = document.querySelector("#Pokemon-height");
      pokeHeight.textContent = "Height: " + pokeData.height;
      let pokeWeight = document.querySelector("#Pokemon-weight");
      pokeWeight.textContent = "Weight: " + pokeData.weight;
      let pokeCategory = document.querySelector("#Pokemon-category");
      pokeCategory.textContent = "Category: " + pokeData.moves[0].move.name;
      let pokeAbilities = document.querySelector("#Pokemon-abilities");
      pokeAbilities.textContent = "Abilities: " + pokeData.abilities[0].ability.name;
      
       }
  
  }



module.exports = PokemonView;