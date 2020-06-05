import React, { Component } from 'react';

class Jumbo extends Component {
  render() {
    return (
      <section
        id='hero'
        class='d-flex flex-column justify-content-center align-items-center'
      >
        <div class='container text-center text-md-left' data-aos='fade-up'>
          <h1>Hey! I'm Eduardo Orozco</h1>
          <h2> FULLSTACK WEB DEVELOPER + UI/UX DESIGNER </h2>
          <a href='#portfolio' class='btn-get-started scrollto'>
            VIEW PORTFOLIO
          </a>
        </div>
      </section>
    );
  }
}

export default Jumbo;
