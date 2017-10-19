import React from 'react';

export default class Services extends React.Component {
  render() {

    var slide1 = {
      backgroundImage: 'url(' + require('../../../images/sporta_dunk.jpg') + ')',
      backgroundPosition: 'center',
      backgroundSize: 'cover'
    };

    var slide2 = {
      backgroundImage: 'url(' + require('../../../images/sporta_vertical_baseball.jpg') + ')',
      backgroundPosition: 'center',
      backgroundSize: 'cover'
    };

    var slide3 = {
      backgroundImage: 'url(' + require('../../../images/sporta_running_beach.jpg') + ')',
      backgroundPosition: 'center',
      backgroundSize: 'cover'
    };

    var slide4 = {
      backgroundImage: 'url(' + require('../../../images/sporta_track_overhead.jpg') + ')',
      backgroundPosition: 'center',
      backgroundSize: 'cover'
    };
    return (
      <div className="services-section">
        <div className="services-section-container">
        <div className="slide-container sc1">
          <div className="services-slide slide-1" style={slide1}></div>
            <div className="slide-title"> Sports Therapy </div>
          </div>
          <div className="slide-container sc2">
            <div className="services-slide slide-2" style={slide2}></div>
            <div className="slide-title"> Sports Training </div>
          </div>
          <div className="slide-container sc3">
            <div className="services-slide slide-3" style={slide3}></div>
            <div className="slide-title"> Complete Recovery </div>
          </div>
          <div className="slide-container sc4">
            <div className="services-slide slide-4" style={slide4}></div>
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
          <div className="mobile-arrow-slider-container ">

              <div className="mobile-arrow-icon-row"></div>
              <div className="mobile-arrow-content-container">
                <div className="mobile-arrow-content"></div>
                <div className="mobile-arrow-paragraph"></div>
              </div>
          </div>
      </div>
    )
  }
}


// 14% 36% 59%

// For each item with "slide-container" class, if clicked,
// a certain text should come up in the "arrow-slider-container" class
