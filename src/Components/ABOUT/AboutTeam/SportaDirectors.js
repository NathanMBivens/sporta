import React from 'react';

export default class SportaDirectors extends React.Component {
  render() {


    var doctorStyle = {
      backgroundImage: 'url(' + require('../../../images/sporta_doctor.jpg') + ')'
    };
    var trainingStyle = {
      backgroundImage: 'url(' + require('../../../images/sporta_lincoln.jpg') + ')'
    };
    var wellnessStyle = {
      backgroundImage: 'url(' + require('../../../images/sporta_violet.jpg') + ')'
    };

    return (
      <div className="directors-section">
        <div className="directors-container">

          <div className="directors-title">Sporta Directors</div>

          <div className="directors-row-section">

            <div className="directors-row">
              <div className="director-image" style={doctorStyle}>
              </div>
              <div className="director-name"> Dr. Will Thompson</div>
              <div className="director-position"> CEO / Therapy & Medical Director</div>
              <div className="director-info"> Dr. Will Thompson graduated
from Duke University in 2002
with his doctorate in Sports Medicine.</div>
              <div className="director-info"> He also received his masters in
Physical Therapy in 1995.</div>
              <div className="director-info"> He worked from 1995-2000
as the physical therapy
manager for the Miami Heat.</div>
              <div className="director-info"> He worked from 2001-2006
as the head of training for the
University of Florida. </div>
<div className="director-info"> In 2007, He started Sporta, Inc. </div>
            </div>

            <div className="directors-row">
              <div className="director-image" style={trainingStyle}>
              </div>
              <div className="director-name"> Lincoln Scott </div>
              <div className="director-position"> Training Director </div>
              <div className="director-info"> Lincoln Scott graduated in
2005 with his masters in
Sports Therapy
from Wake Forest.</div>
              <div className="director-info">  In 2011,
he received his masters in
Exercise & Sport Science from
Duke University. </div>
              <div className="director-info"> He has been with Sporta
from the start. </div>
              <div className="director-info"> His brainchild, VitalU, has
been instrumental in the success
of our athletes. </div>
            </div>

            <div className="directors-row">
              <div className="director-image" style={wellnessStyle}>
              </div>
              <div className="director-name"> Violet Caldwell </div>
              <div className="director-position"> Health & Wellness Director </div>
              <div className="director-info"> Violet Caldwell graduated
from Ohio State University
in 2012 with her masters
in Sports Health. </div>
              <div className="director-info">She worked directly for the
Cleveland Cavaliers from
2013-2016, overhauling their diet and wellness system.</div>
              <div className="director-info"> She also
founded the weight-loss system
Invigorate in 2015</div>
            </div>


          </div>

        </div>

      </div>
    )
  }
}
