class PokemonClient {
    getPokeInfo(PokemonName, callback) {
      fetch('https://pokeapi.co/api/v2/pokemon/' + PokemonName)
        .then(response => response.json())
        .then(data => {
          callback(data)
        });
    }
  }
  
  module.exports = PokemonClient;