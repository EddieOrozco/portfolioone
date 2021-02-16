import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navbar from './components/layout/Navbar';
import Header from './components/pages/Header';
import About from './components/pages/About';
import Projects from './components/Portfolio/Projects';
import moduleName from './components/pages/ContactMain';
// import Contact from './components/Contact';
import Footer from './components/layout/Footer';
import ContactMain from './components/pages/ContactMain';

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Header />
        <About />
        <Projects />
        <ContactMain />
        {/* <Contact /> */}
        <Footer />
      </div>
    );
  }
}

export default App;
