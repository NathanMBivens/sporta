import React from 'react';

export default class DoctorSection extends React.Component {
  render() {
    var style = {
      backgroundImage: 'url(' + require('../../../images/sporta_doctor.jpeg') + ')'
    }
    return (
      <div className="doctor-section">

        <div className="doctor-section-container">
        <h2 className="doctor-greeting">Meet Dr. Will Thompson</h2>
          <div className="doctor-image" style={style}>

          </div>
          <div className="doctor-description">
          <p className="doctor-paragraph"> Under the direction of Will Thompson, Ph. D. Sporta has become one of the top-rated
recovery location for the world’s biggest sports stars. </p>
<p className="doctor-paragraph">Those include: Derrick Rose, Curt Schilling, Kyrie
Irving, Miguel Hernandez just to name a few of our
more than 200 various clients we serve. </p>
          </div>
          <div className="about-button-section">
          <button className="about-button" href="#about"> Learn About Us </button>
          </div>
        </div>
      </div>
    )
  }
}
