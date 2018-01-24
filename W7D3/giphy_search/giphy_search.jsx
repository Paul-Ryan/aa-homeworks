import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import { Root } from './components/root';
import { fetchSearchGiphys } from './util/api_util';
import { receiveSearchGiphys } from './actions/giphy_actions';
import rootReducer from './reducers/root_reducer.js';

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  const store = configureStore();

  ReactDOM.render(<Root store={store} />, root);
});

window.receiveSearchGiphys = receiveSearchGiphys;
window.fetchSearchGiphys = fetchSearchGiphys;
const store = configureStore();
window.store = store;
