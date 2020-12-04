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
              src='//external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.vox-cdn.com%2Fthumbor%2FvjxVTRQQBD9a99Ov1ks_qie7sFU%3D%2F0x0%3A3000x2000%2F1200x800%2Ffilters%3Afocal(1260x760%3A1740x1240)%2Fcdn.vox-cdn.com%2Fuploads%2Fchorus_image%2Fimage%2F61133751%2Facastro_180329_1777_amazon_0001.0.jpg&f=1&nofb=1'
              className='img-fluid'
              alt=''
            />
          </div>
          <div className='col-xl-6 col-lg-5 pt-5 pt-lg-0'>
            <h3 data-aos='fade-up' className='fade-title'>
              Who am I?
            </h3>
            <p data-aos='fade-up'>
              I'm a Front-End Developer from Chicago, IL. I have a serious
              passion for web development and I always try to become better at
              my craft. As a former logistics coordinator I know what it takes
              to complete a task. At this time I am currently seeking a position
              with a company that is willing to push my skills to the next
              level. I look forward to learn more about the web and can't wait
              to make awesome websites like the one's on Awwwards.com. Let's get
              in touch and make exciting, creative projects together.
            </p>
            <h3 data-aos='fade-up' className='fade-title'>
              What do I do?
            </h3>
            <p data-aos='fade-up'>
              I combine research, wireframing, prototyping, visual design &
              development to transform tricky problems into engaging solutions.
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
                Websites don't have to be static, data is key in creating fast
                and awesome websites.
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
                Layouts that can be used on any device big or small, as Mando
                say's "This is the way"
                {/* is the way of the
                wold today. */}
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
