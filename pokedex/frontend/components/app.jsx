import { Route } from "react-router-dom";
import PokemonIndex from "./pokemon/pokemon_index";
import React from 'react';
import PokemonIndexContainer from "./pokemon/pokemon_index_container";
import pokemon_detail_container from "./pokemon/pokemon_detail_container";

const App = () => (
  <>
    <Route path="/" component={ PokemonIndexContainer } />
    {/* <Route path={`pokemon/${pokemon.id}`} component={ pokemon_detail_container } /> */}
  </>
) 

export default App