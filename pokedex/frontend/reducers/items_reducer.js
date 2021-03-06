import { RECEIVE_SINGLE_POKEMON } from "./../actions/pokemon_actions";
import merge from "lodash/merge";

const itemsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_SINGLE_POKEMON:
      const pokeItems = action.pokemon.items;
      return Object.assign({}, state, pokeItems);

    default:
      return state;
  }
};

export default itemsReducer;
