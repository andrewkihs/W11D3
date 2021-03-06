import {
  RECEIVE_ALL_POKEMON,
  RECEIVE_SINGLE_POKEMON,
} from "./../actions/pokemon_actions";
import merge from "lodash/merge";

const pokemonReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ALL_POKEMON:
      return Object.assign({}, action.pokemon, state);
    case RECEIVE_SINGLE_POKEMON:
      debugger;
      const newPokemon = {
        [action.pokemon.pokemon.id]: action.pokemon.pokemon,
      };
      return merge({}, state, newPokemon);
    default:
      return state;
  }
};

export default pokemonReducer;
