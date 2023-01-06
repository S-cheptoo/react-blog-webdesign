import React from 'react';
import ReactDOM from 'react-dom';
import * as ReactDOMClient from 'react-dom/client';
// import Switch from './components/Switch';
import App from './App';

const root = ReactDOMClient.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <Switch /> */}
    <App />
  </React.StrictMode>
);
