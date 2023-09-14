const PokemonClient = require("./PokemonClient");
const PokemonModel = require("./PokemonModel");
const PokemonView = require("./PokemonView");

const client = new PokemonClient();
const model = new PokemonModel();
const view = new PokemonView(model, client);