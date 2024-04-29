import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './font/stylesheet.css'
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import HomePage from './pages/HomePage/HomePage';
import PrivacyPolicy from './pages/PrivacyPolicy/PrivacyPolicy';
import reportWebVitals from './reportWebVitals'
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter >
    <React.StrictMode>
      <Header />
      <Routes>
        <Route path='/' element={ <HomePage />} />
        <Route path='/privacy' element={ <PrivacyPolicy />} />
      </Routes>
      <Footer />
    </React.StrictMode>
  </ BrowserRouter>
);

reportWebVitals();
