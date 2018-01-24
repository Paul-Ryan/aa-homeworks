import React from 'react';
import { Provider } from 'react-redux';

import GiphysSearchContainer from './giphys_search_container';

export const Root = () => (
  <div>
    <Provider store={store}>
      <App />
    </Provider>
  </div>
);
