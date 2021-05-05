import { Route } from "react-router-dom";
import PokemonIndex from "./pokemon/pokemon_index";
import React from 'react';
import PokemonIndexContainer from "./pokemon/pokemon_index_container";

const App = () => (
  <Route path="/" component={ PokemonIndexContainer } />
) 

export default App