import React, { Component } from 'react';
import './Project.scss';

class Project extends Component {
  render() {
    const { id, title, des, soon, image, view } = this.props;
    return (
      <section id='portfolio' className='portfolio section-bg'>
        <div className='col-lg-4 col-md-6 portfolio-item filter-app'>
          <div className='portfolio-wrap'>
            <img src={`${image}`} className='img-fluid' alt='' />
            <div className='portfolio-info'>
              <h4 className='hover-title'>{title}</h4>
              <p className='hover-description'>{des}</p>
              <div className='portfolio-links'>
                <a href={view} target='_blank' title='More Details'>
                  <button
                    type='button'
                    className='btn btn-primary btn-sm prj-btn'
                  >
                    Live Project
                  </button>
                </a>
                <a href='#' title='More Details'>
                  <button
                    type='button'
                    className='btn btn-primary btn-sm prj-btn'
                  >
                    GitHub
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Project;
