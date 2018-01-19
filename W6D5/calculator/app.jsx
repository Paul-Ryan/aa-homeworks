import React from 'react';
import ReactDOM from 'react-dom';

import Calculator from './calculator';

document.addEventListener('DOMContentLoaded', function () {
  const root = document.getElementById('main');
  ReactDOM.render(<Calculator />, root);
});
