import React from 'react';

const Header = () => {
  return (
    <header id='header' className='fixed-top'>
      <div className='container d-flex'>
        <div className='logo mr-auto'>
          <h1 className='text-light'>
            <a href='index.html'>Eduardo</a>
          </h1>
          {/* <!-- Uncomment below if you prefer to use an image logo --> */}
          {/* <!-- <a href="index.html"><img src="assets/img/logo.png" alt="" className="img-fluid"></a>--> */}
        </div>

        <nav className='nav-menu d-none d-lg-block'>
          <ul>
            <li className='active'>
              <a href='#hero'>Home</a>
            </li>
            <li>
              <a href='#about'>About</a>
            </li>

            <li>
              <a href='#portfolio'>Portfolio</a>
            </li>

            <li>
              <a href='#contact'>Contact</a>
            </li>
          </ul>
        </nav>
        {/* <!-- .nav-menu --> */}
      </div>
    </header>
  );
};

export default Header;
