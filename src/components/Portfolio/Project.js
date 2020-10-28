import React, { Component } from 'react';
import './Project.css'

class Project extends Component {
  render() {
    const { id, title, des, soon, image, view } = this.props;
    return (
      <section
        id='portfolio'
        className='portfolio section-bg'
        style={{ margin: '50px 0 90px 0', backgroundColor: '#fff' }}
      >
        <div className='col-lg-4 col-md-6 portfolio-item filter-app'>
          <div className='portfolio-wrap'>
            <img src={`${image}`} className='img-fluid' alt='' />
            <div className='portfolio-info'>
              <h5 style={{ color: '#fff' }}>{soon}</h5>
              <h4>{title}</h4>
              <p>{des}</p>
              <div className='portfolio-links'>
                <a href='#' title='More Details'>
                  <button type='button' class='btn btn-primary btn-sm prj-btn'>
                    GitHub
                  </button>
                </a>
                <a href={view} target='_blank' title='More Details'>
                  <button type='button' class='btn btn-primary btn-sm prj-btn'>
                    VIEW
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
