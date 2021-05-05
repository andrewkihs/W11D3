import { RECEIVE_SINGLE_POKEMON } from "./../actions/pokemon_actions";
import merge from "lodash/merge";

const itemReducer = (state = {}, action) => {
  Object.freeze(state);
  let nextState = {};

  switch (action.type) {
    case RECEIVE_SINGLE_POKEMON:
      // const pokeItems = { [action.pokemon.items.id]: action.pokemon.items };
      let nextState = Object.assign({}, state);
      debugger
      return Object.assign({}, state, action.items);
  
    default:
      return state;
  }
};

export default itemReducer;