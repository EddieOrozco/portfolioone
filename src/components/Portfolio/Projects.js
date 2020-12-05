import React, { Component } from 'react';
import Project from './Project';

class Projects extends Component {
  state = {
    projects: [
      {
        id: 1,
        title: 'A-BAITS-AND-TACKLE',
        des:
          'This is a live website built for a free lance client. I used React JS and other CSS libraries such as SASS / SCSS to give the website some character. Bootstrap was used to build the websites foundation. These libraries where used to produce a fast, functional and responsive website. ',
        img:
          '//external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.gameandfishmag.com%2Ffiles%2F2014%2F03%2FGA-Bass-Forecast.jpg&f=1&nofb=1',
        view: '',
      },
      {
        id: 2,
        title: 'Cars Capstone',
        des:
          'This is a fullstack website using Vue for the front end along with custom CSS files for design. The backend was built with Ruby on Rails and Postico for the database.',
        img: 'assets/img/portfolio/mucelcar1.jpg',
        view: '',
      },
      {
        id: 3,
        title: 'Restaurant',
        des:
          'This website is built in React Js. I utilized the props to pass static data to proper components. CSS was used for the design and Bootstrap.  ',
        soon: null,
        img: 'assets/img/portfolio/food1.jpg',
        view: '',
      },
      {
        id: 4,
        title: 'HULU CLONE',
        des:
          'Built with React, Material UI and CSS Flexbox. This app calls an API to render the movies trending at this moment. I also split up the content in to categories such as top rated, action, comedy and others.        ',
        soon: null,
        img:
          '//external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fappuals.com%2Fwp-content%2Fuploads%2F2019%2F03%2Fhulu-logo-2-945x630.jpg&f=1&nofb=1',
        view: 'https://hulu-clone-e2a5a.web.app/',
      },
      {
        id: 5,
        title: 'AMAZON CLONE',
        des:
          'Tech used React Js, React Router, Material UI, Context API, Hosted on Firebase. This is a Full amazon app the user can sign in add items to a cart, they can see their total and decide to check out. ',
        soon: null,
        img:
          '//external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.vox-cdn.com%2Fthumbor%2FvjxVTRQQBD9a99Ov1ks_qie7sFU%3D%2F0x0%3A3000x2000%2F1200x800%2Ffilters%3Afocal(1260x760%3A1740x1240)%2Fcdn.vox-cdn.com%2Fuploads%2Fchorus_image%2Fimage%2F61133751%2Facastro_180329_1777_amazon_0001.0.jpg&f=1&nofb=1',
        view: 'https://clone-41235.web.app/',
      },
      {
        id: 6,
        title: 'Barbershop',
        des:
          'Built with HTML, CSS and JS. This website is a static landing page for a potential barber shop business. ',
        soon: null,
        img: 'assets/img/portfolio/barber1.jpg',
        view: 'https://joesbarbershop.herokuapp.com/',
      },
    ],
  };
  render() {
    const { projects } = this.state;
    return (
      <div id='portfolio' className='container'>
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
