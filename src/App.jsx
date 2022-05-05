

import React from 'react';

import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import Cards from './components/Cards';
import Footer from './components/Footer';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Route } from 'react-router-dom';


import {Routes} from 'react-router-dom';

export default function App() {
  return (
    <>
      <Router>
        <Navbar />
        <HeroSection />
        <Cards />
        <Routes>
          <Route path='/' exact component={Home} />
  
        </Routes>
          <Footer />
      </Router>
 
    </>
  );
}

