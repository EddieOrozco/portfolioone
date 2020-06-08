import React, { Component } from 'react';
import Project from './Project';

class Projects extends Component {
  state = {
    projects: [
      {
        id: 1,
        title: 'Restaurant',
        des: 'This app was created using React JS along with custom Sass',
      },
      {
        id: 2,
        title: 'Cars Capstone',
        des: 'This app was created using React JS along with custom Sass',
      },
      {
        id: 3,
        title: 'Blog',
        des: 'This app was created using React JS along with custom Sass',
      },
      {
        id: 4,
        title: 'Realestate',
        des: 'This app was created using React JS along with custom Sass',
        soon: 'Coming Soon!',
      },
      {
        id: 5,
        title: 'Barbershop',
        des: 'This app was created using React JS along with custom Sass',
        soon: 'Coming Soon!',
      },
      {
        id: 6,
        title: 'Agency',
        des: 'This app was created using React JS along with custom Sass',
        soon: 'Coming Soon!',
      },
    ],
  };
  render() {
    const { projects } = this.state;
    return (
      <section
        id='portfolio'
        className='portfolio section-bg'
        style={{ height: '100vh', backgroundColor: '#fff' }}
      >
        <div className='container'>
          <div className='section-title' data-aos='fade-up'>
            <h2>Portfolio</h2>
          </div>

          <div className='row portfolio-container' data-aos='fade-up'>
            {projects.map((project) => (
              <Project
                key={project.id}
                title={project.title}
                des={project.des}
                soon={project.soon}
              />
            ))}
          </div>
        </div>
      </section>
    );
  }
}

export default Projects;
