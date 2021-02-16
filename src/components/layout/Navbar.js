import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav id='header' className='navbar navbar-expand-lg fixed-top top-nav'>
      <div className='container d-flex'>
        <div className='logo mr-auto'>
          <h1 className='text-light'>
            <a className='navbar-brand' href='/'>
              <strong className='logo-main'>ETD!</strong>
            </a>
          </h1>
        </div>
        <button
          className='berger navbar-toggler navbar-light  '
          type='button'
          data-toggle='collapse'
          data-target='#navbarNav'
          aria-controls='navbarNav'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon'></span>
        </button>
        <div
          className='collapse navbar-collapse justify-content-end nav-menu d-lg-block navbar navbar-expand-lg navbar-light bg-color'
          id='navbarNav'
        >
          <ul className='navbar-nav'>
            <li className='nav-item active'>
              <a
                className='nav-link main-links'
                style={textDecoration}
                href='#hero'
              >
                Home <span className='sr-only'>(current)</span>
              </a>
            </li>
            <li className='nav-item '>
              <a
                className='nav-link main-links'
                style={textDecoration}
                href='#about'
              >
                About
              </a>
            </li>
            <li className='nav-item '>
              <a
                className='nav-link main-links'
                style={textDecoration}
                href='#portfolio'
              >
                Portfolio
              </a>
            </li>
            <li className='nav-item '>
              <a
                className='nav-link main-links'
                style={textDecoration}
                href='#footer'
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

const textDecoration = {
  textDecoration: 'none',
  color: '#fff',
};

// const textColor = {
//   color: '#fff',
//   border: 'solid #1bac91',
//   padding: '5px',
//   borderRadius: '5px',
// };
export default Navbar;
