import React from 'react';

const Navbar = () => {
  return (
    <header id='header' className='fixed-top'>
      <div className='container d-flex'>
        <div className='logo mr-auto'>
          <h1 className='text-light'>
            <a href='index.html'><strong style={textColor}>ETD!</strong></a>
          </h1>
        </div>
        <nav className='nav-menu d-none d-lg-block navbar navbar-expand-lg navbar-light'>
          <ul>
            <li className='active'>
              <a style={textDecoration} href='#hero'>Home</a>
            </li>
            <li>
              <a style={textDecoration} href='#about'>About</a>
            </li>
            <li>
              <a style={textDecoration} href='#portfolio'>Portfolio</a>
            </li>
            <li>
              <a style={textDecoration} href='#contact'>Contact</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

const textDecoration = {
  textDecoration:'none'
}

const textColor = {
  color:'#fff',
  border:'solid #1bac91',
  padding: '5px',
  borderRadius:'5px'
}


export default Navbar;
