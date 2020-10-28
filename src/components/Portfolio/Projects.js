import React, { Component } from 'react';
import Project from './Project';

class Projects extends Component {
  state = {
    projects: [
      {
        id: 1,
        title: 'A-BAITS-AND-TACKLE',
        des: 'This app was created using React JS along with custom Sass',
        img: '//external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.gameandfishmag.com%2Ffiles%2F2014%2F03%2FGA-Bass-Forecast.jpg&f=1&nofb=1',
      },
      {
        id: 2,
        title: 'Cars Capstone',
        des: 'This app was created using React JS along with custom Sass',
        img: 'assets/img/portfolio/mucelcar1.jpg',
      },
      {
        id: 3,
        title: 'Restaurant',
        des: 'This app was created using React JS along with custom Sass',
        img: 'assets/img/portfolio/food1.jpg',
      },
      {
        id: 4,
        title: 'Barbershop',
        des: 'This app was created using React JS along with custom Sass',
        soon: 'Coming Soon!',
        img: 'assets/img/portfolio/barber1.jpg',
        view:'https://joesbarbershop.herokuapp.com/'
      },
      {
        id: 5,
        title: 'BIKE SHOP',
        des: 'This app was created using React JS along with custom Sass',
        soon: 'Coming Soon!',
        img: 'assets/img/portfolio/food1.jpg',
        view:'https://mikesbikes.herokuapp.com/'
      },
      {
        id: 6,
        title: 'Agency',
        des: 'This app was created using React JS along with custom Sass',
        soon: 'Coming Soon!',
        img: 'assets/img/portfolio/mucelcar1.jpg',
        view:'https://teckco.herokuapp.com/'
      },
    ],
  };
  render() {
    const { projects } = this.state;
    return (
      
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
                view={project.view}
              />
            ))}
          </div>
        </div>
    );
  }
}

export default Projects;
