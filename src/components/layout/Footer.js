import React from 'react';
import './Footer.css'
import {
  BrowserRouter as Router,
  Link
} from "react-router-dom";

export default function Footer() {
  return (
    <footer id='footer'>
      <div className='container'>
        <div className='copyright'>
          <strong>
            &copy; <span>2020</span> <span>EddTheDev</span>
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
          <a href='https://www.linkedin.com/in/eduardoorozco23' target='_blank' className='linkedin'>
            <i className='bx bxl-linkedin'></i>
          </a>
          <a href='https://github.com/EddieOrozco/portfolioone' target='_blank'  className='github'>
            <i className='bx bxl-github'></i>
          </a>
          <a href='https://www.orozcoe230@gmail.com' target='_blank'  className='envelope' >
            <i  className='far fa-envelope'></i>
          </a>
        </div>
      </div>
    </footer>
  );
}
