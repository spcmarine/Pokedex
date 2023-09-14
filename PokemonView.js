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
        // this.display(pokeData)
      });
    });
  }

  display(repoData) {
      let repoName = document.querySelector("#repo-name"); 
      repoName.textContent = repoData.full_name;
      let repoDescription = document.querySelector("#repo-description");
      repoDescription.textContent = repoData.description;
      let repoImage = document.querySelector("#repoImage")
      repoImage.src = repoData.organization.avatar_url;
      
      
      // console.log(repoData.organization.avatar_url)
      // let container = document.querySelector("#main-container");
      // container.appendChild(repoName);
      // container.appendChild(repoDescription);
  }
  
  }



module.exports = PokemonView;