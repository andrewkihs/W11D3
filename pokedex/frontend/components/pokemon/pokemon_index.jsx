import React from 'react';
import PokemonItemIndex from './pokemon_index_item'

class PokemonIndex extends React.Component{
  constructor(props){
    super(props)
  }
  
  componentDidMount(){
    const pokemon = this.props.requestAllPokemon();
    debugger
    const pokemonItems = pokemon.map(poke => (
      <PokemonIndexItem key={poke.id} pokemon={poke} />
    ));
    // debugger
    console.log('pokemon Items below')
    console.log(pokemonItems)
  }
  

  render(){
    return (
    <section className="pokedex">
      <ul>
      {this.props.pokemon.map((poke) => (
        <li className="pokemon-index-item">
          <span>{poke.id}</span>
          <img src={poke.imageUrl}/>
          <span>{poke.name}</span>
        </li>
      ))}
      </ul>
    </section>
    )
  }
}
  
  
  
  export default PokemonIndex;