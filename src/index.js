import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import CarsProvider from './context/CarsProvider';
import SignalProvider from './context/SignalProvider';

ReactDOM.render(
  <React.StrictMode>
    <SignalProvider>
    <CarsProvider>
      <App />
    </CarsProvider>
    </SignalProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
