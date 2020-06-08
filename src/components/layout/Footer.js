import React from 'react';

export default function Footer() {
  return (
    <footer id='footer'>
      <div className='container'>
        <div className='copyright'>
          <strong>
            &copy; <span>2020</span> <span>Eduardo Orozco</span>
          </strong>
        </div>
        <div
          className='social-links mt-3'
          style={{
            textAlign: 'center',
            fontSize: '1.7rem',
            padding: '20px 0 0 0',
          }}
        >
          <a href='#' className='twitter'>
            <i className='bx bxl-twitter'></i>
          </a>
          <a href='#' className='facebook'>
            <i className='bx bxl-facebook'></i>
          </a>
          <a href='#' className='instagram'>
            <i className='bx bxl-instagram'></i>
          </a>
          <a href='#' className='google-plus'>
            <i className='bx bxl-skype'></i>
          </a>
          <a href='#' className='linkedin'>
            <i className='bx bxl-linkedin'></i>
          </a>
        </div>
      </div>
    </footer>
  );
}
