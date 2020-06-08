import React, { Component } from 'react';
import Project from './Project';

class Projects extends Component {
  state = {
    projects: [
      {
        id: 1,
        title: 'Restaurant',
        des: 'This app was created using React JS along with custom Sass',
        img: 'assets/img/portfolio/food1.jpg',
      },
      {
        id: 2,
        title: 'Cars Capstone',
        des: 'This app was created using React JS along with custom Sass',
        img: 'assets/img/portfolio/mucelcar1.jpg',
      },
      {
        id: 3,
        title: 'Blog',
        des: 'This app was created using React JS along with custom Sass',
        img: 'assets/img/portfolio/barber1.jpg',
      },
      {
        id: 4,
        title: 'Realestate',
        des: 'This app was created using React JS along with custom Sass',
        soon: 'Coming Soon!',
        img: 'assets/img/portfolio/barber1.jpg',
      },
      {
        id: 5,
        title: 'Barbershop',
        des: 'This app was created using React JS along with custom Sass',
        soon: 'Coming Soon!',
        img: 'assets/img/portfolio/food1.jpg',
      },
      {
        id: 6,
        title: 'Agency',
        des: 'This app was created using React JS along with custom Sass',
        soon: 'Coming Soon!',
        img: 'assets/img/portfolio/mucelcar1.jpg',
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
                image={project.img}
              />
            ))}
          </div>
        </div>
      </section>
    );
  }
}

export default Projects;
