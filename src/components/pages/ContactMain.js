import React, { Component } from 'react';
import PropTypes from 'prop-types';
import moduleName from './ContactMain.scss';

class ContactMain extends Component {
  render() {
    return (
      <div className='background'>
        <div className='container'>
          <div className='row'>
            <div className='email  col-lg-6 col-md-6' style={email}>
              <h2 style={h2}>Contact</h2>
              <h4>orozcoe230@gmail.com</h4>
            </div>
            <div className='description  col-lg-6 col-md-6' style={description}>
              <h2 style={h2}>Need A Developer</h2>
              <p>
                If you are interested in teaming up with me. Please send me an
                email and I will respond at an appropriate time. Thank You
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const description = {
  backgroundColor: '#fcfcfc',
  padding: '2rem 1rem',
};
const email = {
  backgroundColor: '#1bac91',
  color: '#fff',
  padding: '2rem 1rem',
};

const h2 = {
  padding: '1rem 0',
};

ContactMain.propTypes = {};

export default ContactMain;
