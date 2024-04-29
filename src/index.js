import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './font/stylesheet.css'
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import HomePage from './pages/HomePage/HomePage';
import Contacts from './pages/Contacts/Contacts';
import Partners from './pages/Partners/Partners';
import PrivacyPolicy from './pages/PrivacyPolicy/PrivacyPolicy';
import Prices from './pages/Prices/Prices';
import About from './pages/About/About';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';
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
        <Route path='/about' element={ <About />} />
        <Route path='/prices' element={ <Prices />} />
        <Route path='/partners' element={ <Partners />} />
        <Route path='/contacts' element={ <Contacts />} />
        <Route path='*' element={ <NotFoundPage />} />
      </Routes>
      <Footer />
    </React.StrictMode>
  </ BrowserRouter>
);

reportWebVitals();
