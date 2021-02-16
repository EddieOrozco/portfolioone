import React, { Component } from 'react';
import './Project.scss';

class Project extends Component {
  render() {
    const { id, title, des, soon, image, view, github } = this.props;
    return (
      <section id='portfolio' className='portfolio section-bg'>
        <div className='col-lg-6 col-md-6 portfolio-item filter-app'>
          <div className='portfolio-wrap'>
            <a href={view}>
              <img src={`${image}`} className='img-fluid' alt='' />
            </a>
            <a href={view} target='_blank'>
              <div className='portfolio-info'>
                <h4 className='hover-title'>{title}</h4>
                <p className='hover-description'>{des}</p>
                <div className='portfolio-links'>
                  <a href={view} target='_blank'>
                    <button type='button' className='btn btn-sm prj-btn'>
                      Live Project
                    </button>
                  </a>
                  <a href={github} target='_blank'>
                    <button type='button' className='btn btn-sm prj-btn'>
                      GitHub
                    </button>
                  </a>
                </div>
              </div>
            </a>
          </div>
        </div>
      </section>
    );
  }
}

export default Project;
