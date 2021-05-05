import { connect } from "react-redux";
import { requestSinglePokemon } from "../../actions/pokemon_actions";
import { PokemonDetail } from "./pokemon_detail";
const mapStateToProps = (state, ownProps) => {
  debugger;
  return {
    pokemon: state.pokemon.pokemon[ownProps.match.params.id],
    // items: state.pokemon.items[ownProps.match.params.id],
    // moves: state.pokemon.moves[ownProps.match.params.id],
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  debugger;
  return {
    requestSinglePokemon: () =>
      dispatch(requestSinglePokemon(ownProps.match.params.id)),
  };
};
debugger;
export default connect(mapStateToProps, mapDispatchToProps)(PokemonDetail);
