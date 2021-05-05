import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';


document.addEventListener("DOMContentLoaded", () => {
  const rootEl = document.getElementById("root");
  const store = configureStore();
  // window.getState = store.getState; 
  // window.dispatch = store.dispatch;
  // window.selectAllPokemon = selectAllPokemon
  // window.fetchAllPokemon = fetchAllPokemon;
  // window.receiveAllPokemon = receiveAllPokemon;
  // window.requestAllPokemon = requestAllPokemon;
  ReactDOM.render(<Root store={store} />, rootEl)
})


