import React from 'react';
import './About.css'

function About() {
  return (
    
    <section id='about' className='about' >
      <div className='container'>
        <div className='section-title' data-aos='fade-up'>
          <h2>About</h2>
        </div>

        <div className='row'>
          <div className='col-xl-6 col-lg-7' data-aos='fade-right'>
            <img
              src='https://744025.smushcdn.com/1245953/wp-content/uploads/2019/05/design-development-electronics-326424.jpg?lossy=1&strip=1&webp=1'
              className='img-fluid'
              alt=''
            />
          </div>
          <div className='col-xl-6 col-lg-5 pt-5 pt-lg-0'>
            <h3 data-aos='fade-up'>Who am I?</h3>
            <p data-aos='fade-up'>
              I'm a Front-End Developer from Chicago, IL. I have a serious
              passion for web development and am always looking to push myself.
              As a former logistics coordinator I know what it takes to complete
              a task. At this time I am currently looking for a position as a</p>
              {/* <p>web developer, with a company that is willing to help me grow my
              skills. My interests for the web include animations, custom
              layouts and creating dynamic content. Let's get in touch and make
              exciting, creative projects together.
            </p> */}
             <h3 data-aos='fade-up'>What do I do?</h3>
            <p data-aos='fade-up'>
            I combine research, user flows, wireframing, prototyping, storytelling, and visual design & development to transform tricky problems into engaging solutions. With a background in Front-End Development, 
            </p>
          </div>
        </div>
        <div className='row'>
          <div
            className='col-md-6 col-lg-4 d-flex align-items-stretch mb-5 mb-lg-0'
            data-aos='fade-up'
          >
            <div className='icon-box icon-box-pink'>
              <div className='icon'>
                <i className='fab fa-react'></i>
              </div>
              <h4 className='title'>Dynamic</h4>
              <p className='description'>
                Websites don't have to be static, I love making pages come to
                life.
              </p>
            </div>
          </div>

          <div
            className='col-md-6 col-lg-4 d-flex align-items-stretch mb-5 mb-lg-0'
            data-aos='fade-up'
            data-aos-delay='100'
          >
            <div className='icon-box icon-box-cyan'>
              <div className='icon'>
                <i className='bx bx-file'></i>
              </div>
              <h4 className='title'>Responsive</h4>
              <p className='description'>
                My layouts will work on any device, big or small.
              </p>
            </div>
          </div>

          <div
            className='col-md-6 col-lg-4 d-flex align-items-stretch mb-5 mb-lg-0'
            data-aos='fade-up'
            data-aos-delay='200'
          >
            <div className='icon-box icon-box-green'>
              <div className='icon'>
                <i className='bx bx-tachometer'></i>
              </div>
              <h4 className='title'>Intuitive</h4>
              <p className='description'>
                Strong preference for easy to use, intuitive UX/UI.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    
  );
}


// const sectionMargin = {
//   marginBottom:'500px'
// }

export default About;