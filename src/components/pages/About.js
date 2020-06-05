import React from 'react';

export default function About() {
  return (
    <section id='about' class='about' style={{ height: '100vh' }}>
      <div class='container'>
        <div class='section-title' data-aos='fade-up'>
          <h2>About</h2>
        </div>

        <div class='row'>
          <div class='col-xl-6 col-lg-7' data-aos='fade-right'>
            <img
              src='https://744025.smushcdn.com/1245953/wp-content/uploads/2019/05/design-development-electronics-326424.jpg?lossy=1&strip=1&webp=1'
              class='img-fluid'
              alt=''
            />
          </div>
          <div class='col-xl-6 col-lg-5 pt-5 pt-lg-0'>
            {/* <h3 data-aos='fade-up'>Voluptatem dignissimos provident</h3> */}
            <p data-aos='fade-up'>
              I'm a Front-End Developer form Chicago, IL. I have serious passion
              for UI effects, animations and creating intuitive, dynamic user
              experiences. Let's make something special.
            </p>
            <div class='icon-box' data-aos='fade-up'>
              <i class='fab fa-react'></i>
              <h4>Dynamic</h4>
              <p>
                Websites don't have to be static, I love making pages come to
                life.
              </p>
            </div>

            <div class='icon-box' data-aos='fade-up' data-aos-delay='100'>
              <i class='fas fa-mobile-alt'></i>
              <h4>Responsive</h4>
              <p>My layouts will work on any device, big or small.</p>
            </div>

            <div class='icon-box' data-aos='fade-up' data-aos-delay='200'>
              <i class='fas fa-paint-brush'></i>
              <h4>Intuitive</h4>
              <p>Strong preference for easy to use, intuitive UX/UI.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
