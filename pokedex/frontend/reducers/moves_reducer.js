import { RECEIVE_SINGLE_POKEMON } from "./../actions/pokemon_actions";
import merge from "lodash/merge";

const movesReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_SINGLE_POKEMON:
      const pokeMoves = action.pokemon.moves;
      return Object.assign({}, state, pokeMoves);

    default:
      return state;
  }
};

export default movesReducer;
