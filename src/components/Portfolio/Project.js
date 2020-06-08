import React, { Component } from 'react';

class Project extends Component {
  render() {
    const { id, title, des, soon } = this.props;
    return (
      <div className='col-lg-4 col-md-6 portfolio-item filter-app'>
        <div className='portfolio-wrap'>
          <img
            src='assets/img/portfolio/portfolio-1.jpg'
            className='img-fluid'
            alt=''
          />
          <div className='portfolio-info'>
            <h5 style={{ color: '#fff' }}>{soon}</h5>
            <h4>{title}</h4>
            <p>{des}</p>
            <div className='portfolio-links'>
              <a
                href='assets/img/portfolio/portfolio-1.jpg'
                data-gall='portfolioGallery'
                className='venobox'
                title='App 1'
              >
                <i className='bx bx-plus'>View</i>
              </a>
              <a href='#' title='More Details'>
                <i className='bx bx-link'>GitHub</i>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Project;
