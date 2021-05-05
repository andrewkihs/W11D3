import React from 'react';
import { Link } from "react-router-dom";


class PokemonIndexItem extends React.Component{
  constructor(props){
    super(props);
  }

  render() {
    // debugger
    const pokemon = this.props.pokemon;
    
    return (
      <>

        <li className="pokemon-index-item" >
          <Link to= {`/pokemon/${pokemon.id}`} >
          <span>{pokemon.id}</span> 
          <img src={pokemon.imageUrl} alt={pokemon.name} />{pokemon.name}
          </Link>
        </li>
      </>
    )
  }
}

export default PokemonIndexItem