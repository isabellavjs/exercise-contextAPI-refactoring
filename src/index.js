import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import CarsProvider from './context/CarsProvider';

ReactDOM.render(
  <React.StrictMode>
    <CarsProvider>
      <App />
    </CarsProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
