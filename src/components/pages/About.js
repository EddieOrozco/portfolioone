import React from 'react';
import './About.css';

function About() {
  return (
    <section id='about' className='about'>
      <div className='container'>
        <div className='section-title' data-aos='fade-up'>
          <h2>About</h2>
        </div>

        <div className='row'>
          <div className='col-xl-6 col-lg-7' data-aos='fade-right'>
            <img
              src='assets/img/portfolio/me.jpg'
              className='img-fluid'
              alt=''
            />
          </div>
          <div className='col-xl-6 col-lg-5 pt-5 pt-lg-0'>
            <h3 data-aos='fade-up' className='fade-title'>
              Who am I?
            </h3>
            <p data-aos='fade-up'>
              I'm a Web Developer from Chicago, IL. I have a serious passion for
              web development and I always strive to become better at my craft.
              As a former logistics coordinator I know what it takes to complete
              a task. At this time I am currently seeking a position with a
              company that is willing to push my skills to the next level. I
              look forward to learn more about the web and can't wait to make
              awesome websites. Let's get in touch and make exciting, creative
              projects together. Send me a message.{' '}
              <a href='https://www.orozcoe230@gmail.com' target='_blank'>
                orozcoe230@gmail.com
              </a>
            </p>

            <div className='icon-box icon-box-pink' data-aos='fade-up'>
              <div className='icon'>
                <i className='fab fa-react'></i>
              </div>
              <h4 className='title'>Dynamic</h4>
              <p className='description'>
                Websites don't have to be static, data is key in creating fast
                and awesome websites.
              </p>
            </div>
            <div className='icon-box icon-box-cyan' data-aos='fade-up'>
              <div className='icon'>
                <i className='bx bx-file'></i>
              </div>
              <h4 className='title'>Responsive</h4>
              <p className='description'>
                Layouts that can be used on any device big or small.
                {/* is the way of the
                wold today. */}
              </p>
            </div>
            <div className='icon-box icon-box-green' data-aos='fade-up'>
              <div className='icon'>
                <i className='bx bx-tachometer'></i>
              </div>
              <h4 className='title'>Creative</h4>
              <p className='description'>
                Creating UX/UI designs that any user can use is helpful for any
                business looking to grow their income.
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
