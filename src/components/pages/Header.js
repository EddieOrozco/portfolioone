import React, { Component } from 'react';
import './Header.css';

class Header extends Component {
  render() {
    return (
      <section
        id='hero'
        className='d-flex flex-column justify-content-center align-items-center'
      >
        <div className='container text-center text-md-left' data-aos='fade-up'>
          <h1>Hi, I'M Eddie </h1>
          <h2 style={headerTwoFont}> A FULLSTACK WEB DEVELOPER</h2>
          <div>
            <a
              href='#portfolio'
              className='btn-get-started scrollto'
              style={textDecoration}
            >
              VIEW PORTFOLIO
            </a>
          </div>
        </div>
      </section>
    );
  }
}

const textDecoration = {
  textDecoration: 'none',
};

const headerTwoFont = {
  marginBottom: '20px',
  marginTop: '15px',
};

export default Header;
