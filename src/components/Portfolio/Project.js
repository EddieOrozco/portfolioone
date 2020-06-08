import React, { Component } from 'react';

class Project extends Component {
  render() {
    const { id, title, des, soon, image } = this.props;
    return (
      <div className='col-lg-4 col-md-6 portfolio-item filter-app'>
        <div className='portfolio-wrap'>
          <img src={`${image}`} className='img-fluid' alt='' />
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
                <button type='button' class='btn btn-primary btn-sm'>
                  View
                </button>
              </a>
              <a href='#' title='More Details'>
                <button type='button' class='btn btn-primary btn-sm'>
                  GitHub
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Project;
