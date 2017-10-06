import React from 'react';

export default class Services extends React.Component {
  render() {
    return (
      <div className="services-section">
        <div className="services-section-container">
        <div className="slide-container sc1">
          <div className="services-slide"></div>
            <div className="slide-title"> Sports Therapy </div>
          </div>
          <div className="slide-container sc2">
            <div className="services-slide"></div>
            <div className="slide-title"> Sports Training </div>
          </div>
          <div className="slide-container sc3">
            <div className="services-slide"></div>
            <div className="slide-title"> Complete Recovery </div>
          </div>
          <div className="slide-container sc4">
            <div className="services-slide"></div>
            <div className="slide-title"> Nutrition Planning </div>
          </div>
          </div>
          <div className="arrow-slider-container ">
              <i className="arrow-icon fa fa-caret-up fa-5x" aria-hidden="true"></i>
              <div className="arrow-icon-row"></div>
              <div className="arrow-content-container">
                <div className="arrow-content"></div>
                <div className="arrow-paragraph"></div>
              </div>
          </div>
      </div>
    )
  }
}


// 14% 36% 59%

// For each item with "slide-container" class, if clicked,
// a certain text should come up in the "arrow-slider-container" class
