import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './font/stylesheet.css'
import reportWebVitals from './reportWebVitals';
import Header from './components/Header/Header';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header />
  </React.StrictMode>
);

reportWebVitals();
