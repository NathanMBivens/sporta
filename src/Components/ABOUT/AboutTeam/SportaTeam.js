import React from 'react';

export default class SportaTeam extends React.Component {
  render() {


    var jamesStyle = {
      backgroundImage: 'url(' + require('../../../images/sporta_trainer_2.jpg') + ')'
    };
    var sylviaStyle = {
      backgroundImage: 'url(' + require('../../../images/sporta_trainer_3.jpg') + ')'
    };
    var tylerStyle = {
      backgroundImage: 'url(' + require('../../../images/sporta_trainer.jpg') + ')'
    };
    var victorStyle = {
      backgroundImage: 'url(' + require('../../../images/sporta_trainer_5.jpg') + ')'
    };

    return (
      <div className="directors-section-white">
        <div className="directors-container">

          <div className="directors-title-dark">Therapy & Medical Team</div>

          <div className="directors-row-section">

            <div className="directors-row">
              <div className="director-image" style={jamesStyle}>
              </div>
              <div className="director-name-dark"> James Newman</div>
              <div className="director-position"> Therapy Specialist</div>
              <div className="director-info-dark"> James graduated in
2013 with his masters in Sports Therapy from The University of Florida. </div>
              <div className="director-info-dark"> He has been working at Sporta for four years now.</div>
            </div>

            <div className="directors-row">
              <div className="director-image" style={sylviaStyle}>
              </div>
              <div className="director-name-dark"> Sylvia Searcy</div>
              <div className="director-position"> Therapy & Medical Specialist</div>
              <div className="director-info-dark"> Sylvia has her masters degree in Sports Medicine from The University of Alabama.</div>
              <div className="director-info-dark"> She has worked with the college football program at Alabama.</div>
              <div className="director-info-dark"> She has been working at Sporta for two years.</div>

            </div>

            <div className="directors-row">
              <div className="director-image" style={tylerStyle}>
              </div>
              <div className="director-name-dark"> Tyler George </div>
              <div className="director-position"> Medical Specialist </div>
              <div className="director-info-dark"> Tyler has his masters degree in Sports Medicine from The University of Alabama.</div>
              <div className="director-info-dark"> He has been with Sporta for 6 months.</div>

            </div>

            <div className="directors-row">
              <div className="director-image" style={victorStyle}>
              </div>
              <div className="director-name-dark"> Victor Angelo </div>
              <div className="director-position"> Therapy Specialist </div>
              <div className="director-info-dark"> Victor graduated from USC with his undergraduate in Sports Therapy in 2010.</div>
              <div className="director-info-dark">He graduated in 2013 with his masters in Sports Science.</div>
              <div className="director-info-dark">After working extensively with the USC Trojans sports program, he made the move to Sporta, and has been working here for three years.</div>

            </div>


          </div>

        </div>

      </div>
    )
  }
}
