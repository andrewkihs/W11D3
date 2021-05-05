import React from 'react';

class PokemonDetail extends React.Component {
  constructor(props){
    super(props)
  }

  componentDidMount(){
    this.props.requestSinglePokemon(this.props.pokemon.id)
  }
  render() {
    debugger
    return (
      <>hello</>
    )
  }
}
export default PokemonDetail