import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';

import Root from './components/root';

document.addEventListener('DOMContentLoaded', () => {
  const preloadedState = localStorage.state ?
    JSON.parse(localStorage.state) : {};
  const store = configureStore(preloadedState);

  store = applyMiddlewares(store, addLoggingToDispatch);

  const root = document.getElementById('content');
  ReactDOM.render(<Root store={store} />, root);
});


// const addLoggingToDispatch = (store) => {
//   const currentDisp = store.dispatch;
//   return (action) => {
//     console.log("old state: ", store.getState()); // old state
//     console.log("action ", action);
//     currentDisp(action);
//     console.log("new state: ", store.getState());
//   };
// };

const addLoggingToDispatch = store => next => action => {
      console.log("old state: ", store.getState()); // old state
      console.log("action ", action);
      next(action);
      console.log("new state: ", store.getState());
};

const applyMiddlewares = (store, ...middlewares) => {
  let dispatch = store.dispatch;
  middlewares.forEach((middleware) => {
    dispatch = middleware(store)(dispatch);
  });
  return Object.assign({}, store, { dispatch });
};
