import React from 'react'


class PokemonIndexItem extends React.Component{
  constructor(props){
    super(props)
  }

  render() {

    return (
      <>
        <li>{this.props.pokemon.name}</li>
        <li>{this.props.pokemon.image_url}</li>
      </>
    )
  }
}

export default PokemonIndexItem