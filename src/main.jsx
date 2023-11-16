import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './styles/index.css';
import { HelmetProvider } from 'react-helmet-async';
import React from 'react';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider>
      <App />
    </HelmetProvider>
  </React.StrictMode>
);
