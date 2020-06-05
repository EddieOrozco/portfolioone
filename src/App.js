import React, { Component } from 'react';
import './App.css';
import Header from './components/layout/Header';
import Jumbo from './components/pages/Jumbo';
import About from './components/pages/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/layout/Footer';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Jumbo />
        <About />
        <Portfolio />
        <Contact />
        <Footer />
      </div>
    );
  }
}

export default App;
