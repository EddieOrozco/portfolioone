import React from 'react';

export default function Footer() {
  return (
    <footer id='footer'>
      <div class='container'>
        <div class='copyright'>
          <strong>
            &copy; <span>2020</span> <span>Eduardo Orozco</span>
          </strong>
        </div>
        <div
          class='social-links mt-3'
          style={{
            textAlign: 'center',
            fontSize: '1.7rem',
            padding: '20px 0 0 0',
          }}
        >
          <a href='#' class='twitter'>
            <i class='bx bxl-twitter'></i>
          </a>
          <a href='#' class='facebook'>
            <i class='bx bxl-facebook'></i>
          </a>
          <a href='#' class='instagram'>
            <i class='bx bxl-instagram'></i>
          </a>
          <a href='#' class='google-plus'>
            <i class='bx bxl-skype'></i>
          </a>
          <a href='#' class='linkedin'>
            <i class='bx bxl-linkedin'></i>
          </a>
        </div>
      </div>
    </footer>
  );
}
